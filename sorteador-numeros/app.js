function sortear(){
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt(document.getElementById ('ate').value);
    let numero = gerarNumerosAleatorio (de, ate);
    let sorteados = [];

    for (let i = 0; i < quantidade; i++){
        numero = gerarNumerosAleatorio (de, ate);
        sorteados.push (numero);

        while (sorteados.includes(numero)) {

            numero = gerarNumerosAleatorio (de, ate);
            
        }
    }
    let resposta = document.getElementById ('resultado');
    resposta.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alertarBotao();
}


function gerarNumerosAleatorio (min, max){
    return  Math.floor(Math.random () * (max - min + 1 ))+ min;
}

function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')

    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar(){
    document.getElementById ('ate').value = ''
    document.getElementById ('de').value = ''
    document.getElementById ('quantidade').value = ''

    document.getElementById ('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarBotao();
}
