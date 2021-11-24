import { useEffect, useMemo, useState } from 'react';

import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { BuscarItemMaisVendidoResponse } from '../../service/models/pedido/pedido.model';
import { BuscarItemMaisVendido } from '../../service/pedido.service';

const Dashboard = () => {
	const [itemMaisVendido, setItemMaisVendido] = useState<BuscarItemMaisVendidoResponse>();

	useEffect(() => {
		BuscarItemMaisVendido({params : { ano: 2017, mes: 5}}).then((item) => {
			setItemMaisVendido(item);
		}).catch((error) => {

		});
	}, [])

	const titulo = useMemo(() => {
		return '';
	}, [])

	const body = useMemo(() => {
		return itemMaisVendido?.nomeProduto ? itemMaisVendido.nomeProduto : '';
	}, [itemMaisVendido?.nomeProduto])

	const footer = useMemo(() => {
		return '07/2017';
	}, [])

	return (
		<Layout active="dashboard">
			<div className="d-flex flex-wrap">
				<Card titulo={'Item mais vendido'} body={body} footer={footer}/>
			</div>
		</Layout>
	);
};

export default Dashboard;
