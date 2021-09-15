import { useCallback, useRef } from 'react';
import { useState } from 'react';
import Head from 'next/head';

import FormCadastro from '../../../components/Form/FormCadastro';

import Input from '../../../components/Form/Input';
import Layout from '../../../components/Layout';

import Loader from '../../../components/Loader';

import styles from './style.module.scss';
import { handleEventChange } from '../../../utils/handleChanges';
import { criarCliente } from '../../../service/cliente.service';
import { CriarClienteRequest } from '../../../service/models/cliente/cliente.model';

const NovoProduto: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [cliente, setCliente] = useState<CriarClienteRequest>(
		{} as CriarClienteRequest
	);

	//#endregion
	//#region [ ref ]

	const formRef = useRef(null);

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		const { name, value } = handleEventChange(e, cliente);
	};
	const handleSubmit = useCallback(
		async (e: any) => {
			e.preventDefault();
			setIsLoading(true);
			try {
				const result = await criarCliente(cliente);
			} catch (error) {}
			setIsLoading(false);
		},
		[cliente]
	);

	//#endregion
	//#region [ UseEffects ]

	//#endregion

	return (
		<>
			<Head>
				<title>Clientes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'cliente'}>
				<>
					<div className={`mb-4 py-2 ${styles.titulo}`}>
						<h2>Novo Cliente</h2>
					</div>
					{!isLoading ? (
						<FormCadastro onSubmit={handleSubmit} formRef={formRef}>
							<div className="row">
								<div className="col-5">
									<Input
										type="text"
										name="nomeCliente"
										label="Nome Cliente"
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

export default NovoProduto;
