import React, { useCallback, useEffect, useRef, useState } from 'react';
import { buscarClientesPorFiltro, buscarClientesPorGuid } from '../../../service/cliente.service';
import { BuscarClientesFiltroResponse } from '../../../service/models/cliente/cliente.model';
import { handleEventChange } from '../../../utils/handleChanges';
import DropdownCliente from '../../DropdownCliente';
import Dropdown from '../../Form/Dropdown';
import DropdownOptions from '../../Form/DropdownOptions';
import FormCadastro from '../../Form/FormCadastro';
import Input from '../../Form/Input';
import Loader from '../../Loader';
import styles from './style.module.scss';

interface EscolhaClienteProps {
	setCliente(cliente: string): void;
	cliente: string;
}

const EscolhaCliente: React.FC<EscolhaClienteProps> = ({ setCliente, cliente }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [clienteList, setClienteList] = useState<BuscarClientesFiltroResponse>();
	const [label, setLabel] = useState('');

	const formRef = useRef<HTMLFormElement>(null);

	const fetchClientes = (nomeCliente: string): void => {
		setIsLoading(true);
		try {
			buscarClientesPorFiltro({
				params: {
					countTotal: true,
					nomeCliente: nomeCliente,
					itemsPerPage: 12,
					page: 1,
				},
			}).then((result) => {
				setClienteList(result);
				setIsLoading(false);
			});
		} catch (error) {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		buscarClientesPorFiltro({
			params: {
				countTotal: true,
				nomeCliente: '',
				itemsPerPage: 12,
				page: 1,
			},
		}).then((result) => {
			setClienteList(result);
			setIsLoading(false);
		});
	}, []);

	const handleChange = (e: any) => {
		handleEventChange(e, cliente);
	};

	const handleSubmit = useCallback(async (e: any) => {}, []);

	return (
		<>
			<form onSubmit={handleSubmit} ref={formRef}>
				<div className="row">
					<div className="col-4">
						<DropdownCliente callback={fetchClientes} 
															setData={setCliente} 
															listaCliente={clienteList?.data} 
															isLoading={isLoading} 
															nomeItem={label} />
					</div>
					<div className="col-2">
						<Input autoComplete="off" type="text" name="nf" label="Nota Fiscal" onChange={handleChange} />
					</div>
					<div className="col-4">
						<label className="mb-2">Observações</label>
						<textarea autoComplete="off" className="form-control" name="observacoes" onChange={handleChange}></textarea>
					</div>
				</div>
			</form>
		</>
	);
};

export default EscolhaCliente;
