/**
 * 
 *  Objetivo: Desenvolver um sorteador para a rifa do Projeto Final
 *  Data: 25/11/24
 *  Autor: Gabriel, Lara, Bahia
 *  Versão: 1.0
 * 
 **/

function sortearNumero(){
    const numeroSorteado = Math.floor(Math.random() * 100) + 1
    console.log(`Número sorteado: ${numeroSorteado}`)
    return numeroSorteado
}

sortearNumero()
