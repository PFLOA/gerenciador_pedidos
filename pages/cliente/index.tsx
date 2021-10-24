import { useCallback, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import moment from 'moment';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import FormFilter from '../../components/Form/FormFilter';

import Input from '../../components/Form/Input';
import Layout from '../../components/Layout';
import TableCliente from '../../components/TableCliente';

import { BuscarClientesFiltroResponse } from '../../service/models/cliente/cliente.model';
import { buscarClientesPorFiltro } from '../../service/cliente.service';
import Loader from '../../components/Loader';

import styles from './style.module.scss';
import { handleEventChange } from '../../utils/handleChanges';

interface ClienteProps {
	clienteListaResult: BuscarClientesFiltroResponse;
}

const Cliente: React.FC<ClienteProps> = ({ clienteListaResult }) => {
	//#region [ UseState ]
	const [isLoading, setIsLoading] = useState(false);
	const [filtro, setFiltro] = useState({
		countTotal: true,
		page: 1,
		itemsPerPage: 10,
	});
	const [clienteLista, setClienteLista] =
		useState<BuscarClientesFiltroResponse>();

	//#endregion
	//#region [ ref ]

	const formRef = useRef(null);

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		const { name, value } = handleEventChange(e, filtro);
	};
	const handleSubmit = useCallback(
		async (e: any) => {
			e.preventDefault();
			setIsLoading(true);
			try {
				const result = await buscarClientesPorFiltro({
					params: filtro,
				});
				setClienteLista(result);
			} catch (error) {}
			setIsLoading(false);
		},
		[filtro]
	);
	const clearFilter = () => {

	}

	//#endregion
	//#region [ UseEffects ]

	useEffect(() => {
		buscarClientesPorFiltro({
			params: {
				countTotal: true,
				page: 1,
				itemsPerPage: 10,
			},
		}).then((result) => {
			setClienteLista(result);
		});
	}, []);

	//#endregion

	return (
		<>
			<Head>
				<title>Clientes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'cliente'}>
				{clienteLista?.data ? (
					<>
						<div className={`mb-4 py-2 ${styles.titulo}`}>
							<h2>Clientes</h2>
						</div>
						<FormFilter
							onSubmit={handleSubmit}
							link="cliente/novo"
							formRef={formRef}
							clearFilter={clearFilter}
						>
							<div className="row">
								<div className="col-3">
									<Input
										type="text"
										name="nomeCliente"
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
							<TableCliente data={clienteLista} />
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
		const clienteListaResult = await buscarClientesPorFiltro({
			params: {
				countTotal: true,
				page: 1,
				itemsPerPage: 10,
			},
		});

		return {
			props: {
				clienteListaResult,
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

export default Cliente;
