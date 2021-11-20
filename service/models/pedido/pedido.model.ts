import { ClienteModel } from '../cliente/cliente.model';
import { BaseFilter, Entity, FilterResponse } from '../core/core.model';
import { ItemPedidoModel, ItemPedidoModelPedidoResponse, ItensPedidoModel } from '../itemPedido/item-pedido.model';
import { ProdutoModel } from '../produto/produto.model';

export enum StatusPedido {
	EM_ANDAMENTO = 0,
	ENTREGUE = 1,
	ATRASO = 2,
}
export interface PedidoModel extends Entity {
	statusPedido: StatusPedido;
	nf: string;
	observacoes: string;
	total: number;
	cliente: ClienteModel;
	itensPedido: ItensPedidoModel[];
}
export interface CriarPedidoRequest {
	statusPedido: StatusPedido;
	itenPedido: ItensPedidoModel[];
	clienteGuid: string;
	nf: string;
	observacoes: string;
	total: number;
	dataCadastro: Date;
}
export interface BuscarPedidoFiltroRequest extends BaseFilter {
	statusPedido?: StatusPedido;
	cliente?: string;
	produto?: string;
	nf?: string;
	dataCadastro?: Date;
}
export interface BuscarPedidoPorGuid {
	nf: string;
	observacoes: string;
	total: number;
	statusPedido: StatusPedido;
	clienteResponse: ClienteModel
	itensPedidoResponse: ItemPedidoModelPedidoResponse[];
}
export interface BuscarPedidoFiltroResponse extends FilterResponse<PedidoModel> {}
