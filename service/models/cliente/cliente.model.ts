import { BaseFilter } from '../core/baseFilters.model';

export interface ClienteModel {
	guid: string;
	nomeCliente: string;
}
export interface BuscarClientesFiltroRequest extends BaseFilter {
	/// <summary>
	/// Nome do cliente, pesquisa por aproximação.
	/// </summary>
	nomeCliente?: string;

	/// <summary>
	/// Data de cadastro do cliente ou clientes.
	/// </summary>
	dataCadastro?: Date;
}

export interface BuscarClientesFiltroResponse {
	data: ClienteModel[];
	count: number;
	page: number;
	pages: number;
	totalCount: number;
}
