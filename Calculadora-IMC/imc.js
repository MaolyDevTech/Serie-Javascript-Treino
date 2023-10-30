const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso /(altura * altura)).toFixed(2);

        let classificacao = "";
        
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso. ❗❗';
        } else if (valorIMC < 25){
            classificacao = 'com o peso ideal. Parabéns 🎉✨!!';
        } else if (valorIMC < 30){
            classificacao= 'Levemente pasado de peso.';
        } else if (valorIMC < 35){
            classificacao= 'com obesidade Grau I.'
        } else if (valorIMC < 40){
            classificacao= 'com obesidade Grau II.';
        } else if (valorIMC < 45){
            classificacao = 'com obesidade Grau III. Cuidado ⚠ ❗❗❗❗';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os Campos, por gentileza'
    }
}
calcular.addEventListener('click', imc);