/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import moment from 'moment';

import FormCadastro from '../../../components/Form/FormCadastro';

import Input from '../../../components/Form/Input';
import Layout from '../../../components/Layout';
import Loader from '../../../components/Loader';

import styles from './style.module.scss';

import { handleEventChange, handleMask } from '../../../utils/handleChanges';
import { ProdutoModel } from '../../../service/models/produto/produto.model';
import {
	alterarProduto,
	buscarProdutoPorGuid,
} from '../../../service/produto.service';
import { formatMoney, removerMaskMoney } from '../../../utils/utilsMoney';

const DetalhesProduto: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [produto, setProduto] = useState<ProdutoModel>({} as ProdutoModel);

	//#endregion
	//#region [ ref ]

	const formRef = useRef<HTMLFormElement>(null);

	//#endregion
	//#region [ UseRouter ]

	const router = useRouter();

	//#endregion
	//#region [ Functions ]

	const fetch = useCallback((guid: string) => {
		setIsLoading(true);
		buscarProdutoPorGuid(guid)
			.then((result) => {
				valoresForm(result);
				setProduto(result);
			})
			.catch((error) => {
				console.log(error);
			});
		setIsLoading(false);
	}, []);
	const valoresForm = (item: ProdutoModel) => {
		const formElements = formRef.current?.elements;

		if (formElements) {
			var element = formElements.namedItem('nomeProduto') as Element;
			element.setAttribute('value', item?.nomeProduto);
			element = formElements.namedItem('preco') as Element;
			element.setAttribute('value', formatMoney(item?.preco));
			element = formElements.namedItem('dataCadastro') as Element;
			element.setAttribute(
				'value',
				moment(item?.dataCadastro).format('yyyy-MM-D')
			);
		}
	};

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
				const result = await alterarProduto({
					nomeProduto: produto.nomeProduto,
					guid: produto.guid,
					preco: removerMaskMoney(produto.preco),
				});

				fetch(result.guid);
			} catch (error) {}
			setIsLoading(false);
		},
		[produto, fetch]
	);

	//#endregion
	//#region [ UseEffects ]

	useEffect(() => {
		const { guid } = router.query as {
			guid: string;
		};

		fetch(guid);
	}, [router]);

	//#endregion
	//#region [ UseMemo ]

	//#endregion

	return (
		<>
			<Head>
				<title>Detalhes Produto</title>
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
								<div className="col-5">
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
										name="preco"
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
										disabled
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

export default DetalhesProduto;
