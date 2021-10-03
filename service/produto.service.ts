import EndPoints from './endpoints/endpoints';
import { Alterar, BuscarPorFiltro, BuscarPorGuid, Criar } from './infra/core/service';
import { ToQueryParams } from './models/core/core.model';
import { AlterarProdutoRequest, BuscarProdutosFiltroRequest, BuscarProdutosFiltroResponse, CriarProdutoRequest, ProdutoModel } from './models/produto/produto.model';

export const buscarProdutosPorFiltro = async (filtro: ToQueryParams<BuscarProdutosFiltroRequest>): Promise<BuscarProdutosFiltroResponse> => {
	return await BuscarPorFiltro(EndPoints.Produto, filtro);
};
export const buscarProdutoPorGuid = async (guid: string): Promise<ProdutoModel> => {
	return await BuscarPorGuid<ProdutoModel>(EndPoints.GetProdutoPorGuid, guid);
};
export const alterarProduto = async (body: AlterarProdutoRequest): Promise<ProdutoModel> => {
	console.log(body);
	return await Alterar(EndPoints.Produto, body);
};
export const criarProduto = async (body: CriarProdutoRequest): Promise<ProdutoModel> => {
	return await Criar(EndPoints.Produto, body);
};
