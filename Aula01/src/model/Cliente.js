      //esporta (deixa publica ) a classe cliente de uma forma mais moderna (ES6)

     //  import ClienteController from '../controller/ClienteController';
        export default  class Cliente{


    constructor (nome,endereco,cpf,telefone) {
        // sao atributos do cliente
        //todo cliente vai ter um nome  ' '  vai reseber uma string significa que vc nao sabe o nome do cliente
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
 
    }
}

/*

esportando (deixa pública)a classe cleinte
da forma antiga (old school) do js
*/

//module.exports  = cliente;