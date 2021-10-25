import EndPoints from "./endpoints/endpoints";
import { BuscarPorFiltro, Criar } from "./infra/core/service";
import { ToQueryParams } from "./models/core/core.model";
import { BuscarPedidoFiltroRequest, BuscarPedidoFiltroResponse, CriarPedidoRequest, PedidoModel } from "./models/pedido/pedido.model";

export const buscarPedidosPorFiltro = async (filtro: ToQueryParams<BuscarPedidoFiltroRequest>): Promise<BuscarPedidoFiltroResponse> => {
	return await BuscarPorFiltro(EndPoints.Pedido, filtro);
};
export const criarProduto = async (body: CriarPedidoRequest): Promise<PedidoModel> => {
	return await Criar(EndPoints.Produto, body);
};