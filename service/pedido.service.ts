import EndPoints from "./endpoints/endpoints";
import { BuscarPorFiltro, BuscarPorGuid, Criar } from "./infra/core/service";
import { ToQueryParams } from "./models/core/core.model";
import { BuscarPedidoFiltroRequest, BuscarPedidoFiltroResponse, BuscarPedidoPorGuid, CriarPedidoRequest, PedidoModel } from "./models/pedido/pedido.model";

export const buscarPedidosPorFiltro = async (filtro: ToQueryParams<BuscarPedidoFiltroRequest>): Promise<BuscarPedidoFiltroResponse> => {
	return await BuscarPorFiltro(EndPoints.Pedido, filtro);
};
export const buscarPedidoPorGuid = async (guid: string): Promise<BuscarPedidoPorGuid> => {
	return await BuscarPorGuid(EndPoints.Pedido, guid);
};
export const criarPedido = async (body: CriarPedidoRequest): Promise<PedidoModel> => {
	return await Criar(EndPoints.Pedido, body);
};