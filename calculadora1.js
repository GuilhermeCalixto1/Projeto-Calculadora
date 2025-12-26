const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const botao6 = document.getElementById('botao6');
const botao7 = document.getElementById('botao7');
const botao8 = document.getElementById('botao8');
const botao9 = document.getElementById('botao9');
const botao0 = document.getElementById('botao0');
const botaoigual = document.getElementById('botaoigual');
const botaomais = document.getElementById('botaomais');
const botaomenos = document.getElementById('botaomenos');
const botaolimpar = document.getElementById('botaolimpar');

let num1 = 0;
let valorcaixa;
let num2;


caixa1.value = '';

botao1.onclick = ()=>{
if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+1)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+1;
}

    
}

botao2.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+2)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+2;
}
}

botao3.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+3)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+3;
}
}

botao4.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+4)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+4;
}
}

botao5.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+5)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+5;
}
}

botao6.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+6)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+6;
}
}

botao7.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+7)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+7;
}
}

botao8.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+8)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+8;
}
}

botao9.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+9)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+9;
}
}

botao0.onclick = ()=>{
     if (caixa1.value == 0) {
     num1 = parseFloat(caixa1.value+0)
     caixa1.value = num1;
} else {
     caixa1.value = caixa1.value+0;
}
}

botaoigual.onclick = ()=>{

try {
        let resultado = eval(caixa1.value);

        // Verifica se o resultado é infinito (divisão por zero) ou inválido
        if (!isFinite(resultado) || isNaN(resultado)) {
            caixa1.value = "Erro";
        } else {
            // Aplica a formatação de casas decimais
            caixa1.value = parseFloat(resultado.toFixed(8));
        }
    } catch (erro) {
        // Se a expressão matemática estiver errada (ex: 5++5)
        caixa1.value = "Erro";
    }

}

botaomais.onclick = ()=>{
     caixa1.value = caixa1.value + '+';
}

botaomenos.onclick = ()=>{
     
     caixa1.value = caixa1.value + '-';
}

botaolimpar.onclick = ()=>{

caixa1.value = '';

}
     
     

botaovezes.onclick = ()=>{
     
     caixa1.value = caixa1.value + '*';
   
}
     

botaodivisao.onclick = ()=>{
     
     caixa1.value = caixa1.value + '/';
}