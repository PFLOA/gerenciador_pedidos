import { BaseFilter } from "./core/baseFilters.model";

interface ClienteModel {
  guid: string;
  nomeCliente: string;
}
export interface BuscarClientesFiltroRequest extends BaseFilter {

  /// <summary>
  /// Nome do cliente, pesquisa por aproximação.
  /// </summary>
  NomeCliente?: string;

  /// <summary>
  /// Data de cadastro do cliente ou clientes.
  /// </summary>
  DataCadastro?: Date;
}

export interface BuscarClientesFiltroResponse {
  data: [ClienteModel];
  count: number;
  page: number;
  pages: number;
  totalCount: number;
}