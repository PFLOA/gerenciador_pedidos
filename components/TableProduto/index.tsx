import Td from '../Table/Td';
import Th from '../Table/Th';
import Tr from '../Table/Tr';
import TdLink from '../Table/TdLink';

import styles from './style.module.scss';
import {
	BuscarProdutosFiltroResponse,
	ProdutoModel,
} from '../../service/models/produto/produto.model';
import { useMemo } from 'react';
import { formatMoney } from '../../utils/utilsMoney';

interface TableProdutoProps {
	data: BuscarProdutosFiltroResponse;
}

const Linhas = (item: ProdutoModel, index: number) => {
	const { guid, nomeProduto, preco } = item;

	const precoFormatado = useMemo(() => {
		return formatMoney(preco);
	}, [preco]);

	return (
		<Tr index={index} key={index}>
			<Td>{nomeProduto}</Td>
			<Td>{guid}</Td>
			<Td>{precoFormatado}</Td>
			<TdLink
				link={{
					pathname: 'produto/detalhes/',
					query: { guid: item.guid },
				}}
			>
				Detalhes
			</TdLink>
		</Tr>
	);
};
const TableProduto: React.FC<TableProdutoProps> = ({ data }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<Th width={400}>Nome Produto</Th>
					<Th width={400}>Guid</Th>
					<Th width={400}>Preço</Th>
					<Th width={250}></Th>
				</tr>
			</thead>
			<tbody>{data.data.map(Linhas)}</tbody>
		</table>
	);
};

export default TableProduto;
