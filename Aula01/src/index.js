import ClienteController from './controller/ClienteController';


//criando um novo objeto 
let nome = 'elisane';
let telefone = '(67) 981345072'
let endereco = ' rua jose ravaglia';
let cpf= '03944398839';

    //instaciar um controlador
 
 let  clienteCtrl= new ClienteController( );
 
 // criar um novo objeto de cleinte

 let cliente = clienteCtrl ; 

   criarCliente(nome, endereco, cpf, telefone);

 //exibir objeto de cliente no console

 Console.log(cliente);




 //const Cliente = require('./model/Cliente');
 //let cleinte2 = new Cliente( );
 //console.log(cliente2);
 