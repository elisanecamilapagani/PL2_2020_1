import Produto from '../models/Produto';

export default class ProdutoController {

    async criar(produto) {
        const produtoCriado = await Produto.create(produto);
        return produtoCriado;
    }

    async recuperarTodos( ){
        const produtos = await Produto.find();
        return produtos;
    }
    async recuperarProdutos(descrição) {
        const produto  = await Produto.find({
            descrição: {
                '$regex': descrição,
                '$options':  ' i '
            }
        });

       return produto;

    }

    async atualizar(produto) {
        const atualizarProdutos = await Produto.findByIdAndUpdate(produto);
        return atualizarProdutos;

    }

      async remover(id) {
          const excluirProdutos = await Produto.deleteOne( );
           _id: id
          return  excluirProdutos;
      }


}


