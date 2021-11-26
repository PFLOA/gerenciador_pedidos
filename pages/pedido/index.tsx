import { useCallback, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import FormFilter from '../../components/Form/FormFilter';

import Input from '../../components/Form/Input';
import Layout from '../../components/Layout';
import TablePedido from '../../components/TablePedido';

import Loader from '../../components/Loader';

import styles from './style.module.scss';
import { handleEventChange, handleMask } from '../../utils/handleChanges';
import { buscarProdutosPorFiltro } from '../../service/produto.service';
import { PropriedadesFormularios } from '../../utils/propriedadesFormulario';
import { buscarPedidosPorFiltro } from '../../service/pedido.service';
import { BuscarPedidoFiltroResponse } from '../../service/models/pedido/pedido.model';
import { useToast } from '../../hooks/toast';

interface ProdutoProps {
	produtoListaResult: BuscarPedidoFiltroResponse;
}

const Pedido: React.FC<ProdutoProps> = ({ produtoListaResult }) => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [filtro, setFiltro] = useState({
		countTotal: true,
		page: 1,
		itemsPerPage: 10,
	});
	const [pedidoLista, setPedidoLista] =
		useState<BuscarPedidoFiltroResponse>();

	//#endregion
	//#region [ ref ]
	
	const { addToast } = useToast();
	const formRef = useRef<HTMLFormElement>(null);

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		handleEventChange(e, filtro);
	};
	const handleSubmit = useCallback(
		async (e: any) => {
			e.preventDefault();
			setIsLoading(true);
			try {
				const result = await buscarPedidosPorFiltro({
					params: filtro,
				});
				setPedidoLista(result);
			} catch (error) {}
			setIsLoading(false);
		},
		[filtro]
	);

	const clearFilter = () => {
		formRef.current?.reset();
		setIsLoading(true)
		setFiltro({
			countTotal: true,
			page: 1,
			itemsPerPage: 10,
		});
	}

	//#endregion
	//#region [ UseEffects ]

	useEffect(() => {
		buscarPedidosPorFiltro({
			params: {
				countTotal: true,
				page: 1,
				itemsPerPage: 10,
			},
		}).then((result) => {
			setPedidoLista(result);
		}).catch((error) => {
			addToast({
          type: 'danger',
          title: 'Erro na requisição',
          description: 'Erro ao acessar servidor.',
        })
		});
	}, []);

	useEffect(() => {
		buscarPedidosPorFiltro({
			params: filtro,
		}).then((result) => {
			setPedidoLista(result);
		});

		setIsLoading(false)
	}, [filtro]);

	//#endregion

	return (
		<>
			<Head>
				<title>Pedidos</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'pedido'}>
				{pedidoLista?.data ? (
					<div>
						<div className={`mb-4 py-2 ${styles.titulo}`}>
							<h2>Pedidos</h2>
						</div>
						<FormFilter
							onSubmit={handleSubmit}
							link="pedido/novo"
							formRef={formRef}
							clearFilter={clearFilter}
						>
							<div className="row">
								<div className="col-3">
									<Input
										type="text"
										name="cliente"
										label="Nome Cliente"
										onChange={handleChange}
									/>
								</div>
								<div className="col-3">
									<Input
										type="date"
										name="dataCadastro"
										label="Data de Cadastro"
										onChange={handleChange}
									/>
								</div>
							</div>
						</FormFilter>
						{isLoading ? (
							<div className={styles.loader}>
								<Loader />
							</div>
						) : (
							<TablePedido data={pedidoLista} />
						)}
					</div>
				) : (
					<div className={styles.loader}>
						<Loader />
					</div>
				)}
			</Layout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	try {
		const produtoListaResult = await buscarProdutosPorFiltro({
			params: {
				countTotal: true,
				page: 1,
				itemsPerPage: 10,
			},
		});

		return {
			props: {
				produtoListaResult,
			},
		};
	} catch (error: any) {
		if (error.status === 404)
			return {
				props: {},
			};

		return {
			props: {},
		};
	}
};

export default Pedido;
