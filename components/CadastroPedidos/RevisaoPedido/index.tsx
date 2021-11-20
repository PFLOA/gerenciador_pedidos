import React from 'react';
import { usePedido } from '../../../hooks/novoPedido';
import { ItemPedidoModel } from '../../../service/models/itemPedido/item-pedido.model';
import { CriarPedidoRequest } from '../../../service/models/pedido/pedido.model';
import { formatMoney } from '../../../utils/utilsMoney';
import Td from '../../Table/Td';
import Th from '../../Table/Th';
import Tr from '../../Table/Tr';

import styles from './style.module.scss';

interface RevisaoPedidoProps {}

interface LinhasProp {
	item: ItemPedidoModel;
}

const Linhas: React.FC<LinhasProp> = ({ item }) => {
	const { idProduto, produto, quantidade, preco } = item;

	return (
		<Tr index={idProduto}>
			<Td>{produto.nomeProduto}</Td>
			<Td>{formatMoney(preco)}</Td>
			<Td>{quantidade}</Td>
			<Td>{formatMoney(quantidade * preco)}</Td>
		</Tr>
	);
};

const RevisaoPedido: React.FC<RevisaoPedidoProps> = () => {
	const { pedido, cliente, listagemPedido } = usePedido();

	return (
		<>
			<div className="row align-items-center">
				<div className="col-2">
					<h4>Cliente:</h4>
				</div>
				<div className="col-10">
					<h6 className="p-0 m-0">{cliente}</h6>
				</div>
			</div>
			<hr />
			<div className="row align-items-center">
				<div className="col-2">
					<h4>Nota Fiscal (NF):</h4>
				</div>
				<div className="col-10">
					<h6 className="p-0 m-0">{pedido.nf}</h6>
				</div>
			</div>
			<hr />
			<div className="row align-items-center">
				<div className="col-2">
					<h4>Observações:</h4>
				</div>
				<div className="col-10">
					<h6 className="p-0 m-0">{pedido.observacoes}</h6>
				</div>
			</div>
			<hr />
			<div className="row align-items-center">
				<div className="col-2">
					<h4>Total:</h4>
				</div>
				<div className="col-10">
					<h6 className="p-0 m-0">{formatMoney(pedido.total)}</h6>
				</div>
			</div>
			<hr />
			<div className="row align-items-center">
				<div className={styles.listagem_pedidos}>
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
							{listagemPedido?.map((value: ItemPedidoModel) => (
								<Linhas key={value.idProduto} item={value} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default RevisaoPedido;
