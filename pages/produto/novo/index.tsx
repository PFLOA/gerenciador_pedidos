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
import { CriarProdutoRequest } from '../../../service/models/produto/produto.model';
import { criarProduto } from '../../../service/produto.service';
import { useRouter } from 'next/router';

const NovoProduto: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [produto, setProduto] = useState<CriarProdutoRequest>({} as CriarProdutoRequest);

	//#endregion
	//#region [ ref ]

	const router = useRouter();
	const formRef = useRef(null);

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		handleEventChange(e, produto);
	};
	const handleSubmit = useCallback(
		async (e: any) => {
			e.preventDefault();
			setIsLoading(true);
			try {
				const result = await criarProduto(produto);
				router.push('/pedido/novo');
			} catch (error) {}
			setIsLoading(false);
		},
		[produto, router]
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
			<Layout active={'produto'}>
				<div>
					<div className={`mb-4 py-2 ${styles.titulo}`}>
						<h2>Novo Produto</h2>
					</div>
					{!isLoading ? (
						<FormCadastro onSubmit={handleSubmit} formRef={formRef}>
							<div className="row">
								<div className="col-5">
									<Input type="text" name="nomeProduto" label="Nome Produto" onChange={handleChange} />
								</div>
								<div className="col-2">
									<Input
										type="text"
										name="preco"
										label="Preço"
										onChange={(e) =>
											setProduto({
												...produto,
												preco: ~~e.target.value,
											})
										}
									/>
								</div>
							</div>
						</FormCadastro>
					) : (
						<Loader />
					)}
				</div>
			</Layout>
		</>
	);
};

export default NovoProduto;
