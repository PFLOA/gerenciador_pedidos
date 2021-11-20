import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePedido } from '../../../hooks/novoPedido';
import { buscarClientesPorFiltro } from '../../../service/cliente.service';
import { BuscarClientesFiltroResponse } from '../../../service/models/cliente/cliente.model';
import { formSetValue, handleEventChange } from '../../../utils/handleChanges';
import DropdownCliente from '../../DropdownCliente';
import Input from '../../Form/Input';

interface EscolhaClienteProps {}

const EscolhaCliente: React.FC<EscolhaClienteProps> = () => {
	const { pedido } = usePedido();

	const [isLoading, setIsLoading] = useState(false);
	const [clienteList, setClienteList] = useState<BuscarClientesFiltroResponse>();

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

		formSetValue(formRef, pedido);
		setIsLoading(false);
	}, []);

	const handleChange = (e: any) => {
		handleEventChange(e, pedido);
	};

	return (
		<>
			<form ref={formRef}>
				<div className="row">
					<div className="col-6">
						<DropdownCliente callback={fetchClientes} listaCliente={clienteList?.data} isLoading={isLoading} />
					</div>
					<div className="col-2">
						<Input autoComplete="off" type="text" name="nf" label="Nota Fiscal" onChange={handleChange} />
					</div>
					<div className="col-2">
						<Input type="date" name="dataCadastro" label="Data Cadastro" onChange={handleChange} />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<label className="mb-2">Observações</label>
						<textarea autoComplete="off" rows={6} className="form-control" name="observacoes" onChange={handleChange}></textarea>
					</div>
				</div>
			</form>
		</>
	);
};

export default EscolhaCliente;
