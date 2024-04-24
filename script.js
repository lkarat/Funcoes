// Prática 2

function algebricar(numero) {
   let a=numero%2===0
   let b=numero+10
   let c=numero*numero
   return `o número ${numero} é par? ${a}. Somado com 1O é igual a ${b} e multiplicado por ele mesmo é  ${c}`
    
}

console.log(algebricar(55))