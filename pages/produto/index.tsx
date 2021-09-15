import { useCallback, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import FormFilter from '../../components/Form/FormFilter';

import Input from '../../components/Form/Input';
import Layout from '../../components/Layout';
import TableProduto from '../../components/TableProduto';

import Loader from '../../components/Loader';

import styles from './style.module.scss';
import { handleEventChange, handleMask } from '../../utils/handleChanges';
import { buscarProdutosPorFiltro } from '../../service/produto.service';
import { BuscarProdutosFiltroResponse } from '../../service/models/produto/produto.model';
import { PropriedadesFormularios } from '../../utils/propriedadesFormulario';

interface ProdutoProps {
	produtoListaResult: BuscarProdutosFiltroResponse;
}

const Produto: React.FC<ProdutoProps> = ({ produtoListaResult }) => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [filtro, setFiltro] = useState({
		countTotal: true,
		page: 1,
		itemsPerPage: 10,
	});
	const [produtoLista, setProdutoLista] =
		useState<BuscarProdutosFiltroResponse>();

	//#endregion
	//#region [ ref ]

	const formRef = useRef(null);

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
				const result = await buscarProdutosPorFiltro({
					params: filtro,
				});
				setProdutoLista(result);
			} catch (error) {}
			setIsLoading(false);
		},
		[filtro]
	);

	//#endregion
	//#region [ UseEffects ]

	useEffect(() => {
		buscarProdutosPorFiltro({
			params: {
				countTotal: true,
				page: 1,
				itemsPerPage: 10,
			},
		}).then((result) => {
			setProdutoLista(result);
		});
	}, []);

	//#endregion

	return (
		<>
			<Head>
				<title>Produtos</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'produto'}>
				{produtoLista?.data ? (
					<>
						<div className={`mb-4 py-2 ${styles.titulo}`}>
							<h2>Produtos</h2>
						</div>
						<FormFilter
							onSubmit={handleSubmit}
							link="produto/novo"
							formRef={formRef}
						>
							<div className="row">
								<div className="col-3">
									<Input
										type="text"
										name="nomeProduto"
										label="Nome Produto"
										onChange={handleChange}
									/>
								</div>
								<div className="col-3">
									<Input
										type="text"
										name={PropriedadesFormularios.Money}
										label="Preço"
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
							<TableProduto data={produtoLista} />
						)}
					</>
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

export default Produto;
