import { ProdutoModel } from '../produto/produto.model';

export interface ItemPedidoModel {
	produto: ProdutoModel;
	idProduto: number;
	quantidade: number;
	preco: number;
}