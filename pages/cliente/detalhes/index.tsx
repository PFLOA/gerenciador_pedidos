import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import moment from 'moment';

import FormCadastro from '../../../components/Form/FormCadastro';

import Input from '../../../components/Form/Input';
import Layout from '../../../components/Layout';
import Loader from '../../../components/Loader';

import styles from './style.module.scss';

import { handleEventChange } from '../../../utils/handleChanges';
import { ClienteModel } from '../../../service/models/cliente/cliente.model';
import {
	alterarCliente,
	buscarClientesPorGuid,
} from '../../../service/cliente.service';

const DetalhesCliente: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(true);
	const [cliente, setCliente] = useState<ClienteModel>({} as ClienteModel);

	//#endregion
	//#region [ ref ]

	const formRef = useRef<HTMLFormElement>(null);

	//#endregion
	//#region [ UseRouter ]

	const router = useRouter();

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
				const result = await alterarCliente({
					nomeCliente: cliente.nomeCliente,
					guid: cliente.guid,
				});
			} catch (error) {}
			setIsLoading(false);
		},
		[cliente]
	);

	//#endregion
	//#region [ Functions ]

	const valoresForm = (item: ClienteModel) => {
		const formElements = formRef.current?.elements;

		if (formElements) {
			var element = formElements.namedItem('nomeCliente') as Element;
			element.setAttribute('value', item?.nomeCliente);
			element = formElements.namedItem('dataCadastro') as Element;
			element.setAttribute(
				'value',
				moment(item?.dataCadastro).format('yyyy-MM-D')
			);
		}
	};

	//#endregion
	//#region [ UseEffects ]

	useEffect(() => {
		const { guid } = router.query as {
			guid: string;
		};

		buscarClientesPorGuid(guid)
			.then((result) => {
				setCliente(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [router]);

	useEffect(() => {
		valoresForm(cliente);
		setIsLoading(false);
	}, [cliente]);

	//#endregion
	//#region [ UseMemo ]

	//#endregion

	return (
		<>
			<Head>
				<title>Clientes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'cliente'}>
				<div className={`mb-4 py-2 ${styles.titulo}`}>
					<h2>Detalhes Produto</h2>
				</div>
				{!isLoading ? (
					<>
						<FormCadastro onSubmit={handleSubmit} formRef={formRef}>
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
						</FormCadastro>
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

export default DetalhesCliente;
