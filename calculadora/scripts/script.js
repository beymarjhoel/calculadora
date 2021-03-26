let resultado = document.querySelector('#resultado')

function confirmar() {    
    
    let primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
    let operacao = prompt('Digite a operação desejada:\n| + Adição | - Subtração | x Multiplicação | / Divisão |')
    let segundoValor = parseInt(prompt('Digite o segundo valor: ')) 

    if (operacao == '+') {
        soma(primeiroValor, segundoValor)
    } else if (operacao == '-') {
        subtracao(primeiroValor, segundoValor)
    } else if (operacao == 'x' || operacao == 'X') {
        multiplicacao(primeiroValor, segundoValor)
    } else if (operacao == '/') {
        divisao(primeiroValor, segundoValor)
    } 

}

function soma(primeiroValor, segundoValor) {
    let resposta = parseInt(primeiroValor + segundoValor)
    resultado.innerHTML = primeiroValor + ' + ' + segundoValor + ' = ' + resposta
}

function subtracao(primeiroValor, segundoValor) {
    let resposta = parseInt(primeiroValor - segundoValor)
    resultado.innerHTML = primeiroValor + ' - ' + segundoValor + ' = ' + resposta
}

function divisao(primeiroValor, segundoValor) {
    let resposta = parseInt(primeiroValor / segundoValor)
    resultado.innerHTML = primeiroValor + ' / ' + segundoValor + ' = ' + resposta
}

function multiplicacao(primeiroValor, segundoValor) {
    let resposta = parseInt(primeiroValor * segundoValor) 
    resultado.innerHTML = primeiroValor + ' x ' + segundoValor + ' = ' + resposta
}

function deletar() {
    resultado.innerHTML = '...'
}   