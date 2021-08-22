import {
	BuscarClientesFiltroResponse,
	ClienteModel,
} from '../../service/models/cliente/cliente.model';
import Td from '../Table/Td';
import Th from '../Table/Th';
import Tr from '../Table/Tr';
import TdLink from '../Table/TdLink';

import styles from './style.module.scss';

interface TableClienteProps {
	data: BuscarClientesFiltroResponse;
}

const Linhas = (item: ClienteModel, index: number) => {
	return (
		<Tr index={index} key={index}>
			<Td>{item.nomeCliente}</Td>
			<Td>{item.guid}</Td>
			<TdLink link={`cliente/${item.guid}`}>Detalhes</TdLink>
		</Tr>
	);
};
const TableCliente: React.FC<TableClienteProps> = ({ data }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<Th width={400}>Nome Cliente</Th>
					<Th width={400}>Guid</Th>
					<Th width={250}></Th>
				</tr>
			</thead>
			<tbody>{data.data.map(Linhas)}</tbody>
		</table>
	);
};

export default TableCliente;
