import {
	createRef,
	FormEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
} from 'react';
import { useState } from 'react';
import Head from 'next/head';

import FormCadastro from '../../../components/Form/FormCadastro';

import Input from '../../../components/Form/Input';
import Layout from '../../../components/Layout';
import Th from '../../../components/Table/Th';
import Tr from '../../../components/Table/Tr';
import Td from '../../../components/Table/Td';

import Loader from '../../../components/Loader';

import styles from './style.module.scss';
import { handleEventChange } from '../../../utils/handleChanges';
import {
	buscarClientesPorFiltro,
	criarCliente,
} from '../../../service/cliente.service';
import {
	BuscarClientesFiltroResponse,
	ClienteModel,
} from '../../../service/models/cliente/cliente.model';
import Dropdown from '../../../components/Form/Dropdown';
import DropdownOptions from '../../../components/Form/DropdownOptions';
import { formatMoney } from '../../../utils/utilsMoney';
import { ItemPedidoModel } from '../../../service/models/itemPedido/item-pedido.model';
import {
	BuscarProdutosFiltroResponse,
	ProdutoModel,
} from '../../../service/models/produto/produto.model';
import {
	buscarProdutoPorGuid,
	buscarProdutosPorFiltro,
} from '../../../service/produto.service';
import { CriarPedidoRequest } from '../../../service/models/pedido/pedido.model';

const Linhas = (item: ItemPedidoModel, index: number) => {
	const { produto, quantidade, preco } = item;

	return (
		<Tr index={index} key={index}>
			<Td>{produto.nomeProduto}</Td>
			<Td>{formatMoney(preco)}</Td>
			<Td>{quantidade}</Td>
			<Td>{formatMoney(quantidade * preco)}</Td>
			<Td>Remover</Td>
		</Tr>
	);
};
const NovoPedido: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [clienteList, setClienteList] =
		useState<BuscarClientesFiltroResponse>();
	const [produtoList, setProdutoList] =
		useState<BuscarProdutosFiltroResponse>();
	const [itemPedido, setItemPedido] = useState<ItemPedidoModel>(
		{} as ItemPedidoModel
	);
	const [cliente, setCliente] = useState<string>('');
	const [guidProduto, setGuidProduto] = useState('');
	const [listagemPedido, setListagemPedido] = useState<ItemPedidoModel[]>([]);
	const [pedido, setPedido] = useState<CriarPedidoRequest>(
		{} as CriarPedidoRequest
	);

	//#endregion
	//#region [ ref ]

	const formRef = useRef(null);
	const formRefAddItem = useRef<HTMLFormElement>(null);

	//#endregion
	//#region [ Functions ]

	const fetchClientes = (nomeCliente: string): void => {
		buscarClientesPorFiltro({
			params: {
				countTotal: true,
				nomeCliente: nomeCliente,
				itemsPerPage: 5,
				page: 1,
			},
		}).then((result) => {
			setClienteList(result);
		});
	};
	const fetchProdutos = (nomeProduto: string): void => {
		buscarProdutosPorFiltro({
			params: {
				countTotal: true,
				nomeProduto: nomeProduto,
				itemsPerPage: 5,
				page: 1,
			},
		}).then((result) => {
			setProdutoList(result);
		});
	};

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		handleEventChange(e, pedido);
	};
	const handleSubmit = useCallback(async (e: any) => {
		// e.preventDefault();
		// setIsLoading(true);
		// try {
		// 	const result = await criarCliente(pedido);
		// } catch (error) {}
		// setIsLoading(false);
	}, []);
	const addProdutoListaItens = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setListagemPedido((itens) => [
				...itens,
				{
					idProduto: itemPedido.idProduto,
					produto: itemPedido.produto,
					quantidade: itemPedido.quantidade,
					preco: itemPedido.preco,
				},
			]);
		},
		[
			itemPedido.idProduto,
			itemPedido.preco,
			itemPedido.produto,
			itemPedido.quantidade,
		]
	);
	//#endregion
	//#region [ useEffect ]

	useEffect(() => {
		setPedido((p) => {
			return {
				...p,
				itenPedido: listagemPedido,
				clienteGuid: cliente,
				statusPedido: 0,
				total: 0,
			};
		});
	}, [listagemPedido, cliente]);

	useEffect(() => {
		if (guidProduto) {
			const form = formRefAddItem.current;
			const element = form?.elements.namedItem('preco') as Element;

			buscarProdutoPorGuid(guidProduto).then((result) => {
				setItemPedido((i) => {
					return { ...i, idProduto: result.id, produto: result };
				});
				element.setAttribute('value', formatMoney(result.preco));
			});
		}
	}, [guidProduto]);

	//#endregion
	//#region [ useMemo ]

	//#endregion

	return (
		<>
			<Head>
				<title>Novo Pedido</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'pedido'}>
				<>
					<div className={`mb-4 py-2 ${styles.titulo}`}>
						<h2>Novo Pedido</h2>
					</div>
					{!isLoading ? (
						<>
							<FormCadastro
								onSubmit={handleSubmit}
								formRef={formRef}
							>
								<div className="row">
									<div className="col-4">
										<Dropdown
											label="Pesquisa Cliente"
											callback={fetchClientes}
											setData={setCliente}
										>
											{clienteList &&
												clienteList.data.map(
													(cliente, index) => {
														return (
															<DropdownOptions
																value={
																	cliente.guid
																}
																name={
																	cliente.nomeCliente
																}
																key={index}
															/>
														);
													}
												)}
										</Dropdown>
									</div>
									<div className="col-2">
										<Input
											type="text"
											name="nf"
											label="Nota Fiscal"
											onChange={handleChange}
										/>
									</div>
									<div className="col-5">
										<Input
											type="text"
											name="observacoes"
											label="Observações"
											onChange={handleChange}
										/>
									</div>
								</div>
							</FormCadastro>
							<form
								ref={formRefAddItem}
								onSubmit={addProdutoListaItens}
							>
								<div className="row mb-5">
									<div className="col-4">
										<Dropdown
											label="Pesquisa Produto"
											callback={fetchProdutos}
											setData={setGuidProduto}
										>
											{produtoList &&
												produtoList.data.map(
													(produto, index) => {
														return (
															<DropdownOptions
																value={
																	produto.guid
																}
																name={
																	produto.nomeProduto
																}
																key={index}
															/>
														);
													}
												)}
										</Dropdown>
									</div>
									<div className="col-2">
										<Input
											label="Preço"
											name="preco"
											onChange={(e) =>
												setItemPedido({
													...itemPedido,
													preco: ~~e.target.value
														.replace('R$', '')
														.replace(',', '.'),
												})
											}
										/>
									</div>
									<div className="col-2">
										<Input
											label="Quantidade"
											name="quantidade"
											onChange={(e) =>
												setItemPedido({
													...itemPedido,
													quantidade:
														~~e.target.value,
												})
											}
										/>
									</div>
									<div className="col-2">
										<button
											type="submit"
											className="btn btn-primary mt-4"
										>
											Add Produto
										</button>
									</div>
								</div>
							</form>
							<div className={styles.listagem_pedidos}>
								<table className={styles.table}>
									<thead>
										<tr>
											<Th width={500}>Nome Produto</Th>
											<Th width={400}>Preço</Th>
											<Th width={250}>Quantidade</Th>
											<Th width={250}>Total</Th>
											<Th width={250}></Th>
										</tr>
									</thead>
									<tbody>{listagemPedido?.map(Linhas)}</tbody>
								</table>
							</div>
						</>
					) : (
						<Loader />
					)}
				</>
			</Layout>
		</>
	);
};

export default NovoPedido;
