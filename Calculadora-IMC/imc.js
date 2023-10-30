const calcular = document.getElementById('calcular');
const nomeInput = document.getElementById('nome');
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const resultado = document.getElementById('resultado');

function calcularIMC(nome, altura, peso) {
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso. ❗❗';
        } else if (valorIMC < 25) {
            classificacao = 'com o peso ideal. Parabéns 🎉✨!!';
        } else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade Grau I.'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade Grau II.';
        } else if (valorIMC < 45) {
            classificacao = 'com obesidade Grau III. Cuidado ⚠ ❗❗❗❗';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos, por gentileza';
    }
}

function handleClick() {
    const nome = nomeInput.value;
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    calcularIMC(nome, altura, peso);
}

calcular.addEventListener('click', handleClick);
