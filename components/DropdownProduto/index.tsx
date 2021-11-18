import React, { useState } from 'react';
import { ProdutoModel } from '../../service/models/produto/produto.model';
import Dropdown from '../Form/Dropdown';
import Loader from '../Loader';

import style from './style.module.scss';

interface DropdownProdutoProp {
	callback(req: string): void;
	setData(value: any): any;
	listaProduto: any;
	isLoading: boolean;
	nomeItem?: string;
}

const DropdownProduto: React.FC<DropdownProdutoProp> = ({ listaProduto, isLoading, callback, setData, nomeItem }) => {
	const [nomeProdutoLabel, setNomeProdutoLabel] = useState('');
	const [close, setClose] = useState(false)

	const handleOptionClick = (nomeProduto: string, guid: string) => {
		setData(guid);
		setNomeProdutoLabel(nomeProduto);
		setClose(true)
	};

	return (
		<Dropdown label="Produto" callback={callback} nomeItem={nomeProdutoLabel} close={close}>
			{!isLoading ? (
				listaProduto?.map((produto: ProdutoModel, index: number) => {
					return (
						<div key={index} className={style.option} onClick={() => handleOptionClick(produto.nomeProduto, produto.guid)}>
							<input type="radio" className={style.radio} id={index.toString()} />
							<label htmlFor={index.toString()} onClick={() => handleOptionClick(produto.nomeProduto, produto.guid)}>
								{produto.nomeProduto}
							</label>
						</div>
					);
				})
			) : (
				<Loader tamanho={30} />
			)}
		</Dropdown>
	);
};

export default DropdownProduto;
