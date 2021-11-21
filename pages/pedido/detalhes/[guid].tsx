/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import {GrStatusGoodSmall} from 'react-icons/gr'

import Layout from '../../../components/Layout';
import Loader from '../../../components/Loader';

import styles from './style.module.scss';

import { buscarPedidoPorGuid } from '../../../service/pedido.service';
import { BuscarPedidoPorGuid, PedidoModel, StatusPedido } from '../../../service/models/pedido/pedido.model';
import Th from '../../../components/Table/Th';
import Tr from '../../../components/Table/Tr';
import Td from '../../../components/Table/Td';
import { formatMoney } from '../../../utils/utilsMoney';
import { ItemPedidoModelPedidoResponse } from '../../../service/models/itemPedido/item-pedido.model';
import Link from 'next/link';

interface LinhasProp {
	item: ItemPedidoModelPedidoResponse;
}

const Linhas: React.FC<LinhasProp> = ({ item }) => {
	const { idProduto, produtoResponse, quantidade, preco } = item;

	return (
		<Tr index={idProduto}>
			<Td>{produtoResponse.nomeProduto}</Td>
			<Td>{formatMoney(preco)}</Td>
			<Td>{quantidade}</Td>
			<Td>{formatMoney(quantidade * preco)}</Td>
		</Tr>
	);
};

const DetalhesPedido: React.FC = () => {
	//#region [ UseState ]

	const [isLoading, setIsLoading] = useState(false);
	const [pedido, setPedido] = useState<BuscarPedidoPorGuid>();

	//#endregion
	//#region [ ref ]

	//#endregion
	//#region [ UseRouter ]

	const router = useRouter();

	//#endregion
	//#region [ Functions ]

	//#endregion
	//#region [ Handles ]

	//#endregion
	//#region [ UseEffects ]

	useEffect(() => {
		setIsLoading(true);
		const { guid } = router.query;

		if (guid) {
			buscarPedidoPorGuid(guid as string)
				.then((result) => {
					setPedido(result);
				})
				.catch((error) => {});
		}

		setIsLoading(false);
	}, [router.query]);

	//#endregion
	//#region [ UseMemo ]
	const statusPedido = useMemo(() => {
		switch (pedido?.statusPedido) {
			case StatusPedido.EM_ANDAMENTO:
				return {status: 'Em Andamento', color: 'text-info'};
			case StatusPedido.ENTREGUE:
				return {status: 'Entregue', color: 'text-success'};
			case StatusPedido.ATRASO:
				return {status: 'Atrasado', color: 'text-warning'};
			default:
				break;
		}
	}, [pedido?.statusPedido]);
	//#endregion

	return (
		<>
			<Head>
				<title>Detalhes Pedido</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout active={'pedido'}>
				<div>
					<div className={`mb-4 py-2 mx-2 ${styles.titulo}`}>
						<h2>Detalhes Pedido</h2>
					</div>
					{!isLoading && pedido ? (
						<>
							<div className="row align-items-center mx-2 my-2">
								<div className="col-2">
									<h5 className="p-0 m-0">Cliente:</h5>
								</div>
								<div className="col">
									<h6 className="p-0 m-0">{pedido?.clienteResponse?.nomeCliente}</h6>
								</div>
							</div>
							<div className="row align-items-center mx-2 my-2">
								<div className="col-2">
									<h5 className="p-0 m-0">Observações:</h5>
								</div>
								<div className="col">
									<h6 className="p-0 m-0">{pedido?.observacoes}</h6>
								</div>
							</div>
							<div className="row align-items-center mx-2 my-2">
								<div className="col-2">
									<h5 className="p-0 m-0">Nota Fiscal (NF):</h5>
								</div>
								<div className="col">
									<h6 className="p-0 m-0">{pedido?.nf}</h6>
								</div>
							</div>
							<div className="row align-items-center mx-2 my-2">
								<div className="col-2">
									<h5 className="p-0 m-0">Status do Pedido:</h5>
								</div>
								<div className="col d-flex align-items-center">
									<GrStatusGoodSmall className={`me-3 ${statusPedido?.color}`}/>
									<h6 className="p-0 m-0">{statusPedido?.status}</h6>
								</div>
							</div>
							<div className="row align-items-center mx-2 my-2">
								<div className="col-2">
									<h5 className="p-0 m-0">Total:</h5>
								</div>
								<div className="col">
									<h6 className="p-0 m-0">{formatMoney(pedido?.total)}</h6>
								</div>
							</div>
							<div className="row align-items-center mt-5 mx-2">
								<table className={styles.table}>
									<thead>
										<tr>
											<Th width={1000}>Nome Produto</Th>
											<Th width={400}>Preço</Th>
											<Th width={250}>Quantidade</Th>
											<Th width={250}>Total</Th>
										</tr>
									</thead>
									<tbody>
										{pedido?.itensPedidoResponse.map((value: ItemPedidoModelPedidoResponse) => (
											<Linhas key={value.idProduto} item={value} />
										))}
									</tbody>
								</table>
							</div>
							<div className="mt-5 mx-2">
								<Link href="/pedido">
									<a href="#" className="btn btn-warning">Voltar</a>
								</Link>
							</div>
						</>
					) : (
						<div className={styles.loader}>
							<Loader />
						</div>
					)}
				</div>
			</Layout>
		</>
	);
};

export default DetalhesPedido;
