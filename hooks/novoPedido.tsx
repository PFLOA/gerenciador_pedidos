import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ItemPedidoModel, ItensPedidoModel } from '../service/models/itemPedido/item-pedido.model';
import { CriarPedidoRequest } from '../service/models/pedido/pedido.model';
import { removerMaskMoney, removerMaskMoneyString } from '../utils/utilsMoney';

type CartContextData = {
	setCliente(cliente: string): void;
	setListagemPedido(itens: ItemPedidoModel[]): void;
	setPedido(pedido: CriarPedidoRequest): void;
	addItemPedido(item: ItemPedidoModel): void;
	removerItemPedido(id: number): void;
	listagemPedido: ItemPedidoModel[];
	pedido: CriarPedidoRequest;
	cliente: string;
};

const PedidoContext = createContext<CartContextData>({} as CartContextData);

export const PedidoProvider: React.FC = ({ children }) => {

	const [cliente, setClientes] = useState<string>('');
	const [listagemPedido, setListagemPedidos] = useState<ItemPedidoModel[]>([]);
	const [listaItensPedido, setListaItensPedido] = useState<ItensPedidoModel[]>([]);
	const [pedido, setPedidos] = useState<CriarPedidoRequest>({
		clienteGuid: '',
		nf: '',
		observacoes: '',
		statusPedido: 0,
		total: 0,
		itenPedido: [],
		dataCadastro: new Date(),
		porcentagemComissao: 0
	});

	const setCliente = useCallback((value: string) => {
		setClientes(value);
	}, []);

	const setPedido = useCallback((value: CriarPedidoRequest) => {
		setPedidos(value);
	}, []);

	const setListagemPedido = useCallback((value: ItemPedidoModel[]) => {
		setListagemPedidos(value);
	}, []);

	
	const calculateTotal = useCallback(() => {
		var total = 0;
		listagemPedido.forEach((item) => {
			total += item.preco * item.quantidade;
		});

		return total;
	}, [listagemPedido]);

	const removerItemPedido = (id: number) => {
		var filtered = listagemPedido.filter(function (value) {
			if (value.idProduto !== id) return value;
		});

		console.log(filtered);
		console.log(listagemPedido);

		

		setListagemPedido(filtered);
	};

	const addItemPedido = useCallback(
		(item: ItemPedidoModel) => {
			const found = listagemPedido.find((produto) => produto.idProduto == item.idProduto);
			if (found) return;

			const newList = [...listagemPedido];
			const newListItensPedido = [...listaItensPedido];

			newList.push({
				idProduto: item.idProduto,
				produto: item.produto,
				quantidade: item.quantidade,
				preco: item.preco,
			});

			newListItensPedido.push({
				idProduto: item.idProduto,
				quantidade: item.quantidade,
				preco: item.preco,
			})

			setListaItensPedido(newListItensPedido);
			setListagemPedido(newList);
		},
		[listaItensPedido, listagemPedido, setListagemPedido]
	);

	useEffect(() => {
			const total = calculateTotal();
			
			setPedidos({
				clienteGuid: pedido.clienteGuid,
				itenPedido: listagemPedido,
				nf: pedido.nf,
				observacoes: pedido.observacoes,
				statusPedido: pedido.statusPedido,
				total: total,
				dataCadastro: pedido.dataCadastro,
				porcentagemComissao: pedido.porcentagemComissao
			})
			
	}, [listagemPedido, listaItensPedido])

	return <PedidoContext.Provider value={{ setCliente, setListagemPedido, setPedido, addItemPedido, removerItemPedido, listagemPedido, pedido, cliente }}>{children}</PedidoContext.Provider>;
};

export const usePedido = (): CartContextData => {
	const context = useContext(PedidoContext);

	if (!context) {
		throw new Error('useForm must be used within an CartProvider');
	}

	return context;
};
