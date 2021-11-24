import EndPoints from "./endpoints/endpoints";
import { BuscarPorFiltro, BuscarPorGuid, Criar, Remover } from "./infra/core/service";
import { ToQueryParams } from "./models/core/core.model";
import { BuscarItemMaisVendidoRequest, BuscarItemMaisVendidoResponse, BuscarPedidoFiltroRequest, BuscarPedidoFiltroResponse, BuscarPedidoPorGuid, BuscarStatusPedidosRequest, BuscarStatusPedidosResponse, CriarPedidoRequest, PedidoModel } from "./models/pedido/pedido.model";

export const buscarPedidosPorFiltro = async (filtro: ToQueryParams<BuscarPedidoFiltroRequest>): Promise<BuscarPedidoFiltroResponse> => {
	return await BuscarPorFiltro(EndPoints.Pedido, filtro);
};
export const buscarPedidoPorGuid = async (guid: string): Promise<BuscarPedidoPorGuid> => {
	return await BuscarPorGuid(EndPoints.Pedido, guid);
};
export const BuscarItemMaisVendido = async (filtro: ToQueryParams<BuscarItemMaisVendidoRequest>): Promise<BuscarItemMaisVendidoResponse> => {
	return await BuscarPorFiltro(EndPoints.ItemMaisPedido, filtro);
};
export const BuscarStatusPedidos = async (filtro: ToQueryParams<BuscarStatusPedidosRequest>): Promise<BuscarStatusPedidosResponse> => {
	return await BuscarPorFiltro(EndPoints.TotalPedidosStatus, filtro);
};
export const criarPedido = async (body: CriarPedidoRequest): Promise<PedidoModel> => {
	return await Criar(EndPoints.Pedido, body);
};
export const removerPedido = async (guid: string): Promise<PedidoModel> => {
	return await Remover(EndPoints.Pedido, guid);
};