import Td from '../Table/Td';
import Th from '../Table/Th';
import Tr from '../Table/Tr';

import { BuscarPedidoFiltroResponse, PedidoModel, StatusPedido } from '../../service/models/pedido/pedido.model';

import styles from './style.module.scss';
import { formatDatePedido } from '../../utils/formatDate';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { changeStatusPedido, removerPedido } from '../../service/pedido.service';
import { Dropdown } from 'react-bootstrap';

interface TablePedidoProps {
	data: BuscarPedidoFiltroResponse;
}

const Linhas = (item: PedidoModel, index: number) => {
	const { guid } = item;
	console.log(item);

	const statusPedido = useMemo(() => {
		switch (item?.statusPedido) {
			case StatusPedido.EM_ANDAMENTO:
				return { status: 'Em Andamento', color: 'text-info' };
			case StatusPedido.ENTREGUE:
				return { status: 'Entregue', color: 'text-success' };
			case StatusPedido.ATRASO:
				return { status: 'Atrasado', color: 'text-warning' };
			default:
				break;
		}
	}, [item?.statusPedido]);

	const removePedido = (guid: string) => {
		try {
			removerPedido(guid).then((result) => {});
		} catch (error) {}
	};

	const changeStatus = (guid: string, status: StatusPedido) => {
		try {
			changeStatusPedido({guid: guid, statusPedido: status}).then((result)=>{

			})
		} catch (error) {}
	};

	return (
		<Tr index={index} key={index}>
			<Td tooltip={true} titleTooltip={item.observacoes}>
				{item.cliente.nomeCliente}
			</Td>
			<Td tooltip={true} titleTooltip={statusPedido?.status} align={'center'}>
				<GrStatusGoodSmall className={`me-3 ${statusPedido?.color}`} />
			</Td>
			<Td>{formatDatePedido(item.dataCadastro)}</Td>
			<Td>
				<div className="d-flex align-items-center">
					<Link
						href={{
							pathname: `pedido/detalhes/${guid}`,
						}}
					>
						<a className={styles.link}>Detalhes</a>
					</Link>
					<Link
						href={{
							pathname: `/pedido`,
						}}
					>
						<a className={`ms-4 ${styles.link_remover}`} onClick={() => removePedido(item.guid)}>
							Remover
						</a>
					</Link>
					<Dropdown className="d-inline mx-2">
						<Dropdown.Toggle id="dropdown-autoclose-true" style={{ background: 'transparent', color: 'green', border: '0', fontSize: '14px', textDecoration: 'underline' }}>
							Status
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#" onClick={() => changeStatus(item.guid, StatusPedido.ENTREGUE)}>Entregue</Dropdown.Item>
							<Dropdown.Item href="#" onClick={() => changeStatus(item.guid, StatusPedido.CANCELAR)}>Cancelar</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</Td>
		</Tr>
	);
};

const TablePedido: React.FC<TablePedidoProps> = ({ data }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<Th width={1200}>Nome Cliente</Th>
					<Th align={'center'} width={50}>
						Status Pedido
					</Th>
					<Th width={200}>Data Cadastro</Th>
					<Th width={200}></Th>
				</tr>
			</thead>
			<tbody>{data.data.map(Linhas)}</tbody>
		</table>
	);
};

export default TablePedido;
