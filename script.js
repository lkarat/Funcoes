//function imprimirNome(pessoa) {
//    console.log("Olá", pessoa);  
//}
//imprimirNome("Ricardinho")
//imprimirNome("Britany")
//imprimirNome("Joshua")
//imprimirNome("Stephany")

// Fuções não nomeada

/*let imprimirNome= function (nome) {
let nominho=nome
console.log(nominho);

}

imprimirNome("Gustavo Gustamante")
*/

// Prática 2

//function algebricar(numero) {
  // let a=numero%2===0
   //let b=numero+10
   //let c=numero*numero
   //return `o número ${numero} é par? ${a}. Somado com 1O é igual a ${b} e multiplicado por ele mesmo é  ${c}`
    
//}

//console.log(algebricar(55))

//function verification(login,senha) {
 //  let loginArmazenado="astrodev"
 //  const senhaArmazenada="bananinha123"
//   return login===loginArmazenado && senha===senhaArmazenada
  
//}
//console.log(verification("astrodev","bananinha123"))
//console.log(verification("lucas","neto"))


// exercício 3 - arrow
const verification= (login,senha) => {
   let loginArmazenado="astrodev"
   const senhaArmazenada="bananinha123"
   return login===loginArmazenado && senha===senhaArmazenada
  
}
console.log(verification("astrodev","bananinha123"))
console.log(verification("lucas","neto"))
