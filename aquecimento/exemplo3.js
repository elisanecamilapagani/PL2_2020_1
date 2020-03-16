
/**
 * Cria as variaveis a e b 
 * com escopo de script ou (global)
 */
var a = 1;

var b = 1;

if(a % 2 ==1){

    a =2;
    b =2;
}

const c = a +b;
console.log(c);

/**
 * toda variavel criada dentro de uma funcao tem escopo de funcion 
 */
function FazAlgumaCoisa( ) {

    a = a + 1;
    b = b+ 1 ;

   var d=7 ;
  let e = 8;

}

FazAlgumaCoisa();
console.log(a);
console.log(b);


if(a % 2 ==1){
    var f = 2;
    let g =1;

}

console.log(f);
console.log(g);