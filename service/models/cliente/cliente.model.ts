import { BaseFilter } from '../core/core.model';

export interface ClienteModel {
	guid: string;
	nomeCliente: string;
	dataCadastro: Date;
}
export interface CriarClienteRequest {
	nomeCliente: string;
}

export interface AlterarClienteRequest extends CriarClienteRequest {
	guid: string;
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
