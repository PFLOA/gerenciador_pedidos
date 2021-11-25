import router from 'next/router';
import React, { useState } from 'react';
import { usePedido } from '../../hooks/novoPedido';
import { ClienteModel } from '../../service/models/cliente/cliente.model';
import Dropdown from '../Form/Dropdown';
import Loader from '../Loader';

import style from './style.module.scss';

interface DropdownClienteProp {
	callback(req: string): void;
	listaCliente: any;
	isLoading: boolean;
}

const DropdownCliente: React.FC<DropdownClienteProp> = ({ listaCliente, isLoading, callback }) => {
	const { setCliente, setPedido, pedido, cliente } = usePedido();
	const [close, setClose] = useState(false);

	const handleOptionClick = (nomeCliente: string, guid: string) => {
		setCliente(nomeCliente);
		setClose(true);
		setPedido({
			clienteGuid: guid,
			nf: pedido.nf,
			observacoes: pedido.observacoes,
			statusPedido: pedido.statusPedido,
			total: pedido.total,
			itenPedido: pedido.itenPedido,
			dataCadastro: pedido.dataCadastro,
			porcentagemComissao: pedido.porcentagemComissao
		});
	};

	return (
		<Dropdown label="Pesquisa Cliente" callback={callback} nomeItem={cliente} close={close}>
			{!isLoading ? (
				listaCliente?.length > 0 ? (
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
					<div className={style.option} onClick={() => router.push('/cliente/novo')}>
						<input type="radio" className={style.radio} />
						<label>Cadastrar Novo Cliente</label>
					</div>
				)
			) : (
				<Loader tamanho={30} />
			)}
		</Dropdown>
	);
};

export default DropdownCliente;
