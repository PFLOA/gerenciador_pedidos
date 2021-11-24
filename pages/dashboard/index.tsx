import { useEffect, useMemo, useRef, useState } from 'react';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { BuscarItemMaisVendidoResponse, BuscarStatusPedidosResponse } from '../../service/models/pedido/pedido.model';
import { BuscarItemMaisVendido, BuscarStatusPedidos } from '../../service/pedido.service';
import { formatMoney } from '../../utils/utilsMoney';

const date = new Date();

const Dashboard = () => {
	const [itemMaisVendido, setItemMaisVendido] = useState<BuscarItemMaisVendidoResponse>();
	const [pedidosStatus, setPedidosStatus] = useState<number>();
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingCard, setIsLoadingCard] = useState(false);
	const [isLoadingCardStatus, setIsLoadingCardStatus] = useState(false);

	const [filtrosStatusPedido, setFiltroStatusPedido] = useState({ mes: date.getMonth() + 1, ano: date.getFullYear(), statusPedido: 0 });

	const itemMaisVendidoRef = useRef<HTMLInputElement>(null);
	const itemStatusRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		try {
			BuscarItemMaisVendido({ params: { ano: filtrosStatusPedido.ano, mes: filtrosStatusPedido.mes } }).then((item) => {
				setItemMaisVendido(item);
				BuscarStatusPedidos({ params: { ano: filtrosStatusPedido.ano, mes: filtrosStatusPedido.mes, statusPedido: filtrosStatusPedido.statusPedido } }).then((obj) => {
					setPedidosStatus(obj.total);
					setIsLoading(false);

					var data = itemMaisVendidoRef?.current;
					data?.setAttribute('value', `${filtrosStatusPedido.ano}-${filtrosStatusPedido.mes}`);
					data = itemStatusRef?.current;
					data?.setAttribute('value', `${filtrosStatusPedido.ano}-${filtrosStatusPedido.mes}`);
				});
			});
		} catch (error) {
			setIsLoading(false);
		}

		const data = itemMaisVendidoRef?.current;
		data?.setAttribute('value', `${date.getFullYear()}-${date.getMonth()}`);
	}, []);

	const handleCardItemMaisVendido = (e: any) => {
		const arr = e.target.value.split('-');

		setIsLoadingCard(true);
		BuscarItemMaisVendido({ params: { ano: arr[0], mes: arr[1] } })
			.then((item) => {
				setItemMaisVendido(item);
				setIsLoadingCard(false);
			})
			.catch((error) => {
				setIsLoadingCard(false);
			});
	};
	const handleCardStatus = (e: any) => {
		switch (e.target.name) {
			case 'dataStatusPedido':
				const arr = e.target.value.split('-');
				setFiltroStatusPedido((filtro) => {
					return { ...filtro, mes: arr[1], ano: arr[0] };
				});
				break;
			case 'status':
				setFiltroStatusPedido((filtro) => {
					return { ...filtro, statusPedido: e.target.value };
				});
				break;
		}
	};

	useEffect(() => {
		setIsLoadingCardStatus(true);
		BuscarStatusPedidos({ params: { ano: filtrosStatusPedido.ano, mes: filtrosStatusPedido.mes, statusPedido: filtrosStatusPedido.statusPedido } })
			.then((item) => {
				setPedidosStatus(item.total);
				setIsLoadingCardStatus(false);
			})
			.catch((error) => {
				setIsLoadingCardStatus(false);
			});
	}, [filtrosStatusPedido.ano, filtrosStatusPedido.mes, filtrosStatusPedido.statusPedido]);

	const footer = useMemo(() => {
		return (
			<div>
				<input className="form-control" type="month" ref={itemMaisVendidoRef} onChange={handleCardItemMaisVendido} />
			</div>
		);
	}, []);

	const footerStatus = useMemo(() => {
		return (
			<div className="d-flex">
				<input className="form-control me-4" name="dataStatusPedido" pattern="[0-9]{4}-[0-9]{2}" type="month" ref={itemStatusRef} onChange={handleCardStatus} />
				<select className="form-control w-75" onChange={handleCardStatus} name="status">
					<option value="0">Em Andamento</option>
					<option value="1">Entregue</option>
					<option value="2">Atrasado</option>
					<option value="3">Cancelado</option>
				</select>
			</div>
		);
	}, []);

	const total = useMemo(() => {
		return itemMaisVendido?.total ? formatMoney(itemMaisVendido?.total) : formatMoney(0);
	}, [itemMaisVendido?.total]);

	return (
		<Layout active="dashboard">
			<div className={`d-flex flex-wrap ms-3 ${isLoading && 'align-items-center h-100 justify-content-center'}`}>
				{!isLoading ? (
					<>
						<Card titulo={'Item mais vendido mês'} footer={footer} id="itemMaisVendido">
							<div className="d-flex flex-column">
								{!isLoadingCard ? (
									<>
										<div className="mb-1" style={{ fontStyle: 'italic' }}>
											{itemMaisVendido?.nomeProduto}
										</div>
										<div className="mb-1">Qtd:. {itemMaisVendido?.quantidadeVendidaMes}</div>
										<div>Total:. {total}</div>
									</>
								) : (
									<Loader />
								)}
							</div>
						</Card>
						<Card titulo={'Total Pedidos com status'} footer={footerStatus} id="status">
							<div className="d-flex flex-column">
								{!isLoadingCardStatus ? (
									<>
										<div className="mb-1">Total Pedidos:. {pedidosStatus ? pedidosStatus : 0}</div>
									</>
								) : (
									<Loader />
								)}
							</div>
						</Card>
					</>
				) : (
					<div className="align-self-center">
						<Loader />
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Dashboard;
