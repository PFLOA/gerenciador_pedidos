import {
	BuscarClientesFiltroResponse,
	ClienteModel,
} from '../../service/models/cliente/cliente.model';
import Td from '../Table/Td';
import Th from '../Table/Th';
import Tr from '../Table/Tr';
import TdLink from '../Table/TdLink';

import styles from './style.module.scss';
import { BuscarPedidoFiltroResponse, PedidoModel } from '../../service/models/pedido/pedido.model';

interface TablePedidoProps {
	data: BuscarPedidoFiltroResponse;
}

const Linhas = (item: PedidoModel, index: number) => {
	const { guid } = item;
	return (
		<Tr index={index} key={index}>
			<Td>{item.cliente.nomeCliente}</Td>
			<Td>{item.guid}</Td>
			<Td>{item.dataCadastro}</Td>
			<TdLink
				link={{
					pathname: 'pedido/detalhes/',
					query: { guid: item.guid },
				}}
			>
				Detalhes
			</TdLink>
		</Tr>
	);
};
const TablePedido: React.FC<TablePedidoProps> = ({ data }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<Th width={400}>Nome Cliente</Th>
					<Th width={200}>Guid</Th>
					<Th width={200}>Data Cadastro</Th>
					<Th width={250}></Th>
				</tr>
			</thead>
			<tbody>{data.data.map(Linhas)}</tbody>
		</table>
	);
};

export default TablePedido;
