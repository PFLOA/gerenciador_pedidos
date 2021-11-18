import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { usePedido } from '../../../hooks/novoPedido';
import { ItemPedidoModel } from '../../../service/models/itemPedido/item-pedido.model';
import { BuscarProdutosFiltroResponse } from '../../../service/models/produto/produto.model';
import { buscarProdutoPorGuid, buscarProdutosPorFiltro } from '../../../service/produto.service';
import { handleEventChange } from '../../../utils/handleChanges';
import { formatMoney } from '../../../utils/utilsMoney';
import DropdownProduto from '../../DropdownProduto';
import Input from '../../Form/Input';
import Td from '../../Table/Td';
import Th from '../../Table/Th';
import Tr from '../../Table/Tr';

import styles from './style.module.scss';

interface ItensPedidoProps {}

interface LinhasProp {
	item: ItemPedidoModel;
	remover(id: number): void;
}

const Linhas: React.FC<LinhasProp> = ({ item, remover }) => {
	const { idProduto, produto, quantidade, preco } = item;

	return (
		<Tr index={idProduto}>
			<Td>{produto.nomeProduto}</Td>
			<Td>{formatMoney(preco)}</Td>
			<Td>{quantidade}</Td>
			<Td>{formatMoney(quantidade * preco)}</Td>
			<Td>
				<button type="button" className={`btn btn-warning ${styles.remover_item}`} onClick={(e) => remover(idProduto)}>
					Remover
				</button>
			</Td>
		</Tr>
	);
};

const ItensPedido: React.FC<ItensPedidoProps> = () => {
	const { setListagemPedido, setPedido, removerItemPedido, listagemPedido, addItemPedido } = usePedido();

	//#region [ UseState ]

	const [itemPedido, setItemPedido] = useState<ItemPedidoModel>({} as ItemPedidoModel);
	const [isLoading, setIsLoading] = useState(false);
	const [guidProduto, setGuidProduto] = useState('');
	const [produtoList, setProdutoList] = useState<BuscarProdutosFiltroResponse>();
	const [mensagem, setMensagem] = useState('');

	//#endregion
	//#region [ ref ]

	const formRef = useRef<HTMLFormElement>(null);
	const addButton = useRef(null);

	//#endregion
	//#region [ Functions ]

	const fetchProdutos = (nomeProduto: string): void => {
		setIsLoading(true);
		try {
			buscarProdutosPorFiltro({
				params: {
					countTotal: true,
					nomeProduto: nomeProduto,
					itemsPerPage: 5,
					page: 1,
				},
			}).then((result) => {
				setProdutoList(result);
				setIsLoading(false);
			});
		} catch (error) {
			setIsLoading(false);
		}
	};

	//#endregion
	//#region [ Handles ]

	const handleSubmit = useCallback(async (e: any) => {}, []);

	const handleChangeItemPedido = (e: any) => {
		handleEventChange(e, itemPedido);
	};

	const addProdutoListaItens = useCallback(
		(e: any) => {
			if (itemPedido.preco <= 0) {
				setMensagem('Preço não pode ser 0.00');
				return;
			}

			addItemPedido(itemPedido);
		},
		[addItemPedido, itemPedido]
	);

	const clearProdutos = (input: any) => {
		if (input) input.value = '';
	};

	//#endregion
	//#region [ useEffect ]

	useEffect(() => {
		setMensagem('');
		if (guidProduto) {
			const form = formRef.current;
			const element = form?.elements.namedItem('preco') as Element;

			buscarProdutoPorGuid(guidProduto).then((result) => {
				setItemPedido((i) => {
					return { ...i, idProduto: result.id, produto: result, preco: result.preco };
				});
				element.setAttribute('value', formatMoney(result.preco));
			});
		}
	}, [guidProduto]);

	useEffect(() => {
		setIsLoading(true);
		buscarProdutosPorFiltro({
			params: {
				countTotal: true,
				nomeProduto: '',
				itemsPerPage: 12,
				page: 1,
			},
		}).then((result) => {
			setProdutoList(result);
			setIsLoading(false);
		});
	}, []);

	//#endregion
	//#region [ useMemo ]
	const hasMessage = useMemo(() => {
		return mensagem ? true : false;
	}, [mensagem]);
	//#endregion

	

	return (
		<>
			<form onSubmit={handleSubmit} ref={formRef}>
				<div className="row mb-5">
					<div className="col-4">
						<DropdownProduto callback={fetchProdutos} setData={setGuidProduto} listaProduto={produtoList?.data} isLoading={isLoading} />
					</div>
					<div className="col-2">
						<Input label="Preço" name="preco" readOnly onChange={handleChangeItemPedido} />
					</div>
					<div className="col-2">
						<Input
							label="Quantidade"
							name="quantidade"
							onChange={(e) =>
								setItemPedido({
									...itemPedido,
									quantidade: ~~e.target.value,
								})
							}
						/>
					</div>
					<div className="col-2">
						<button type="button" ref={addButton} className="btn btn-primary mt-4" onClick={addProdutoListaItens}>
							Add Produto
						</button>
						<Overlay target={addButton.current} show={hasMessage} placement="right">
							<Tooltip id="preco-erros">{mensagem}</Tooltip>
						</Overlay>
					</div>
				</div>
			</form>
			<div className={styles.listagem_pedidos}>
				<table className={styles.table}>
					<thead>
						<tr>
							<Th width={1000}>Nome Produto</Th>
							<Th width={400}>Preço</Th>
							<Th width={250}>Quantidade</Th>
							<Th width={250}>Total</Th>
							<Th width={250}></Th>
						</tr>
					</thead>
					<tbody>
						{listagemPedido?.map((value: ItemPedidoModel) => (
							<Linhas key={value.idProduto} item={value} remover={removerItemPedido} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ItensPedido;
