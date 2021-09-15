import { useCallback, useRef } from 'react';
import { useState } from 'react';
import Head from 'next/head';

import FormCadastro from '../../../components/Form/FormCadastro';

import Input from '../../../components/Form/Input';
import Layout from '../../../components/Layout';

import Loader from '../../../components/Loader';

import styles from './style.module.scss';
import { handleEventChange } from '../../../utils/handleChanges';
import {
	buscarClientesPorFiltro,
	criarCliente,
} from '../../../service/cliente.service';
import { BuscarClientesFiltroResponse } from '../../../service/models/cliente/cliente.model';
import Dropdown from '../../../components/Form/Dropdown';
import DropdownOptions from '../../../components/Form/DropdownOptions';

const NovoPedido: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [clienteList, setClienteList] =
		useState<BuscarClientesFiltroResponse>();

	//#endregion
	//#region [ ref ]

	const formRef = useRef(null);

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

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		// const { name, value } = handleEventChange(e, pedido);
	};
	const handleSubmit = useCallback(async (e: any) => {
		// e.preventDefault();
		// setIsLoading(true);
		// try {
		// 	const result = await criarCliente(pedido);
		// } catch (error) {}
		// setIsLoading(false);
	}, []);

	//#endregion
	//#region [ UseEffects ]

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
						<FormCadastro onSubmit={handleSubmit} formRef={formRef}>
							<div className="row">
								<div className="col-5">
									<Dropdown callback={fetchClientes}>
										{clienteList &&
											clienteList.data.map(
												(cliente, index) => {
													return (
														<DropdownOptions
															value={cliente.guid}
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
					) : (
						<Loader />
					)}
				</>
			</Layout>
		</>
	);
};

export default NovoPedido;
