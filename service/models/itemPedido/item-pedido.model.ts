import { ProdutoModel } from '../produto/produto.model';

export interface ItemPedidoModel {
	produto: ProdutoModel;
	idProduto: number;
	quantidade: number;
	preco: number;
}
export interface ItemPedidoModelPedidoResponse {
	produtoResponse: ProdutoModel;
	idProduto: number;
	quantidade: number;
	preco: number;
}

export interface ItensPedidoModel {
	idProduto: number;
	quantidade: number;
	preco: number;
}
