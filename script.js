let pontoUsuario = 0;
let pontoMaquina = 0;
let pontoUsuario_span = document.getElementById("pontos-usuario");
let pontoMaquina_span = document.getElementById("pontos-maquina");
const placar_div = document.querySelector(".placar");
const resultado_p = document.querySelector(".resultado > p");
const pedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tesoura_div = document.getElementById("s");
let ganhou = "Você Ganhou !";
let perdeu = "Você Perdeu!";
let empatou = "Empatou!";


function getEscolhaComputador() {
    const escolhas = ['r', 'p', 's'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return escolhas [numeroAleatorio];
    

}

function converterPalavras(palavra) {
    if (palavra === "r") return "Pedra";
    if (palavra === "p") return "Papel";
    return "Tesoura";
}





function vencer(escolhaUsuario, escolhaComputador) {
    pontoUsuario++;
    pontoUsuario_span.innerHTML = pontoUsuario;
    pontoMaquina_span.innerHTML= pontoMaquina;
    const usuarioEmMinusculo = "jogador".fontsize(3) .sub();
    const maquinaEmMinusculo = "computador".fontsize(3) .sub();
    resultado_p.innerHTML = `${converterPalavras(escolhaUsuario)}${usuarioEmMinusculo} ganha de ${converterPalavras(escolhaComputador)}${maquinaEmMinusculo}. ${(ganhou.fontcolor('#31b43a'))}`
    document.getElementById(escolhaUsuario).classList.add('brilho-verde');
    setTimeout(function(){document.getElementById(escolhaUsuario).classList.remove('brilho-verde')}, 300);
}

function perder(escolhaUsuario, escolhaComputador) {
    pontoMaquina++;
    pontoUsuario_span.innerHTML = pontoUsuario;
    pontoMaquina_span.innerHTML= pontoMaquina;
    const usuarioEmMinusculo = "jogador".fontsize(3) .sub();
    const maquinaEmMinusculo = "computador".fontsize(3) .sub();
    resultado_p.innerHTML = `${converterPalavras(escolhaUsuario)}${usuarioEmMinusculo} perde pra ${converterPalavras(escolhaComputador)}${maquinaEmMinusculo}. ${(perdeu.fontcolor('#d01115'))}`
    document.getElementById(escolhaUsuario).classList.add('brilho-vermelho');
    setTimeout(function(){document.getElementById(escolhaUsuario).classList.remove('brilho-vermelho')}, 300);
}

function empatar(escolhaUsuario, escolhaComputador) {
    const usuarioEmMinusculo = "jogador".fontsize(3) .sub();
    const maquinaEmMinusculo = "computador".fontsize(3) .sub();
    resultado_p.innerHTML = `${converterPalavras(escolhaUsuario)}${usuarioEmMinusculo} empata com ${converterPalavras(escolhaComputador)}${maquinaEmMinusculo}. ${(empatou.fontcolor('#000'))}`
    document.getElementById(escolhaUsuario).classList.add('brilho-cinza');
    setTimeout(function(){document.getElementById(escolhaUsuario).classList.remove('brilho-cinza')}, 300);
}



function game(escolhaUsuario) {
    const escolhaComputador = getEscolhaComputador();
    switch (escolhaUsuario + escolhaComputador) {
        case "rs":
        case "pr":
        case "sp":
            vencer(escolhaUsuario, escolhaComputador);
            break;
        case "rp":
        case "ps":
        case "sr":
            perder(escolhaUsuario, escolhaComputador);
            break;
        case "pp":
        case "ss":
        case "rr":
            empatar(escolhaUsuario, escolhaComputador);
            break;

    }


}





function main(){
    pedra_div.addEventListener('click', function() {
    game("r")
    })

    papel_div.addEventListener('click' , function(){
        game("p")

    })

    tesoura_div.addEventListener('click' , function(){
        game("s")
    })

}

main();