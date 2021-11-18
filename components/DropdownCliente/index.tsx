import React, { useState } from 'react';
import { ClienteModel } from '../../service/models/cliente/cliente.model';
import Dropdown from '../Form/Dropdown';
import Loader from '../Loader';

import style from './style.module.scss';

interface DropdownClienteProp {
	callback(req: string): void;
	setData(value: any): any;
	listaCliente: any;
	isLoading: boolean;
	nomeItem: string;
}

const DropdownCliente: React.FC<DropdownClienteProp> = ({ listaCliente, isLoading, callback, setData, nomeItem }) => {
	const [nomeClienteLabel, setNomeClienteLabel] = useState('');
	const [close, setClose] = useState(false)

	const handleOptionClick = (nomeCliente: string, guid: string) => {
		setData(guid);
		setNomeClienteLabel(nomeCliente);
		setClose(true)
	};

	return (
		<Dropdown label="Pesquisa Cliente" callback={callback} nomeItem={nomeClienteLabel} close={close}>
			{!isLoading ? (
				listaCliente?.map((cliente: ClienteModel, index: number) => {
					return (
						<div key={index} className={style.option} onClick={() => handleOptionClick(cliente.nomeCliente, cliente.guid)}>
							<input type="radio" className={style.radio} id={index.toString()} />
							<label htmlFor={index.toString()} onClick={() => handleOptionClick(cliente.nomeCliente, cliente.guid)}>
								{cliente.nomeCliente}
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

export default DropdownCliente;
