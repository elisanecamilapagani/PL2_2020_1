import * as db from './config/db';
import ProdutoController from './controllers/ProdutoController';
import Produto from './models/Produto';


const produtoCtrl = new ProdutoController();

let ManipularBD = async () => {

    db.conectarBD();
    const produto = await produtoCtrl.recuperarProdutos('leite')
      console.log(produto)



  //  let produto = await produtoCtrl.atualizar('5eb1c96e7f4ee81f349dc77c');
 //   produto.quantidade = 5
 //   console.log(produto)



    db.desconectarBD();

}

ManipularBD();
