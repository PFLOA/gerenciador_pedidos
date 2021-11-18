import React, { useEffect } from 'react';
import { useState } from 'react';
import Head from 'next/head';

import Layout from '../../../components/Layout';

import styles from './style.module.scss';

import { handleEventChange } from '../../../utils/handleChanges';
import { ItemPedidoModel } from '../../../service/models/itemPedido/item-pedido.model';
import { CriarPedidoRequest } from '../../../service/models/pedido/pedido.model';
import ItensPedido from '../../../components/CadastroPedidos/ItensPedido';
import EscolhaCliente from '../../../components/CadastroPedidos/EscolhaCliente';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RevisaoPedido from '../../../components/CadastroPedidos/RevisaoPedido';

const NovoPedido: React.FC = () => {
	//#region [ UseState ]

	const [cliente, setCliente] = useState<string>('');
	const [listagemPedido, setListagemPedido] = useState<ItemPedidoModel[]>([]);
	const [pedido, setPedido] = useState<CriarPedidoRequest>({} as CriarPedidoRequest);

	const componentsList = [
		{
			id: 1,
			title: 'Cliente',
			component: <EscolhaCliente setCliente={setCliente} cliente={cliente} />,
		},
		{
			id: 2,
			title: 'Itens Pedido',
			component: <ItensPedido listaItensPedido={listagemPedido} setListaItensPedido={setListagemPedido} />,
		},
		{
			id: 3,
			title: 'Revisão',
			component: <RevisaoPedido pedido={pedido} />,
		},
	];

	//#endregion
	//#region [ ref ]

	//#endregion
	//#region [ Functions ]

	//#endregion
	//#region [ Handles ]

	const handleChange = (e: any) => {
		handleEventChange(e, pedido);
	};

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
				<Breadcrumbs listComponentes={componentsList} />
			</Layout>
		</>
	);
};

export default NovoPedido;
