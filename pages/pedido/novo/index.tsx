import React, { useEffect } from 'react';
import Head from 'next/head';

import Layout from '../../../components/Layout';

import { PedidoProvider, usePedido } from '../../../hooks/novoPedido';
import ItensPedido from '../../../components/CadastroPedidos/ItensPedido';
import EscolhaCliente from '../../../components/CadastroPedidos/EscolhaCliente';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RevisaoPedido from '../../../components/CadastroPedidos/RevisaoPedido';

const NovoPedido: React.FC = () => {
	//#region [ Hooks ]

	//#endregion
	//#region [ UseState ]

	const componentsList = [
		{
			id: 1,
			title: 'Cadastro',
			component: (
				<>
					<div className="my-5">
						<EscolhaCliente />
					</div>
					<hr></hr>
					<div className="my-5">
						<ItensPedido />
					</div>
				</>
			),
		},
		{
			id: 2,
			title: 'Revisão',
			component: <RevisaoPedido />,
		},
	];

	//#endregion

	return (
		<>
			<Head>
				<title>Novo Pedido</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'pedido'}>
				<PedidoProvider>
					<Breadcrumbs listComponentes={componentsList} />
				</PedidoProvider>
			</Layout>
		</>
	);
};

export default NovoPedido;
