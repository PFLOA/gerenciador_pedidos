import { useEffect, useMemo, useRef, useState } from 'react';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { BuscarItemMaisVendidoResponse } from '../../service/models/pedido/pedido.model';
import { BuscarItemMaisVendido } from '../../service/pedido.service';
import { formatMoney } from '../../utils/utilsMoney';

const Dashboard = () => {
	const [itemMaisVendido, setItemMaisVendido] = useState<BuscarItemMaisVendidoResponse>();
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingCard, setIsLoadingCard] = useState(false);
	const itemMaisVendidoRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const date = new Date();

		BuscarItemMaisVendido({ params: { ano: date.getFullYear(), mes: date.getMonth() } })
			.then((item) => {
				setItemMaisVendido(item);
				setIsLoading(false);
				const data = itemMaisVendidoRef?.current;
				data?.setAttribute('value', `${date.getFullYear()}-${date.getMonth()}`);
			})
			.catch((error) => {
				setIsLoading(false);
			});
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

	const footer = useMemo(() => {
		return (
			<div>
				<input className="form-control" type="month" ref={itemMaisVendidoRef} onChange={handleCardItemMaisVendido} />
			</div>
		);
	}, []);

	const total = useMemo(() => {
		return itemMaisVendido?.total ? formatMoney(itemMaisVendido?.total) : formatMoney(0);
	}, [itemMaisVendido?.total]);

	return (
		<Layout active="dashboard">
			<div className={`d-flex flex-wrap ${isLoading && 'align-items-center h-100 justify-content-center'}`}>
				{!isLoading ? (
					<Card titulo={'Item mais vendido mês'} footer={footer}>
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
