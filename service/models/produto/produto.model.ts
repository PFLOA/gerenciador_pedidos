import { BaseFilter, Entity, FilterResponse } from '../core/core.model';

export interface ProdutoModel extends Entity {
	nomeProduto: string;
	preco: number;
}
export interface CriarProdutoRequest {
	nomeProduto: string;
	preco: number;
}
export interface AlterarProdutoRequest extends CriarProdutoRequest {
	guid: string;
}
export interface BuscarProdutosFiltroRequest extends BaseFilter {
	nomeProduto?: string;
	preco?: number;
	dataCadastro?: Date;
}
export interface BuscarProdutosFiltroResponse
	extends FilterResponse<ProdutoModel> {}
