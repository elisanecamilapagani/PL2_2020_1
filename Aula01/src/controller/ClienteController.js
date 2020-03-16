 /*
 importa a classe cleinte com a função require 
 (forma antiga do js)
 ..sai da pasta controller
 //const Cliente = require( '../model/Cliente')
 */
// importa a classe Cliente com a palavra reservada import (forma mais moderna - ES6) 

  import Cliente from '../model/Cliente';

     export default class ClienteController{

    criarCliente(nome, endereco,  cpf, telefone) {

        //Instaciando um novo objeto da classe cliente  
           let cliente = new Cliente(nome, endereco, cpf, telefone);
            cliente.nome = nome;
           cliente.endereco = endereco;
           cliente.cpf = cpf;
           cliente.telefone= telefone;

           return cliente;
    }  
}
// exportando  a classe 
 //module.exports =ClienteController;