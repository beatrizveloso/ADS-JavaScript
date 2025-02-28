// Exercícios da aula do Prof Luís 

// 1 - Soma de dois números
function soma() {
  var n1 = parseInt(document.getElementById('num1').value) || 0;
  var n2 = parseInt(document.getElementById('num2').value) || 0;
  var soma = n1 + n2;
  document.getElementById('res').value = soma;
}

// 2 - Verificar se um número é par ou ímpar
function verificarParImpar() {
  let numero = document.getElementById('num').value;
  if (numero % 2 === 0) {
    document.getElementById('resultado').innerText = "O número é par";
  } else {
    document.getElementById('resultado').innerText = "O número é ímpar";
  }
}
// 3 - Tabuada de um número
function Tabuada() {
  let num = document.getElementById("num").value;
  let resultado = document.getElementById("resultadoTabuada");
  resultado.innerHTML = "";

  if (num === "") {
    resultado.innerHTML = "Digite um número.";
    return;
  }

  num = parseInt(num);
  for (let i = 1; i <= 10; i++) {
    let item = document.createElement("li");
    item.textContent = `${num} x ${i} = ${num * i}`;
    resultado.appendChild(item);
  }
}

// 4 - Inverter uma string
function inverterString() {
  let texto = document.getElementById("texto").value;
  let resultado = document.getElementById("resultadoString");

  if (texto === "") {
    resultado.innerHTML = "Digite uma palavra.";
    return;
  }

  let textoInvertido = texto.split('').reverse().join('');
  resultado.innerHTML = `String invertida: ${textoInvertido}`;
}

// 5 - Calcular o fatorial de um número
function calcularFat() {
  let num = document.getElementById("num").value;
  let resultado = 1;
  for (let i = num; i > 1; i--) {
    resultado *= i;
  }
  document.getElementById("resultadoFat").innerText = "Fatorial: " + resultado;
}

// 6 - Gerar um número aleatório entre 1 e 100
function gerarAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  document.getElementById("resulAleatorio").innerText = "Número Aleatório: " + numeroAleatorio;
}

 // 7 - Verificar se uma palavra é um palíndromo
 function verificarPalindromo() {
  const palavra = document.getElementById("palavraInput").value;
  const palavraReversa = palavra.split('').reverse().join('');
  const resultado = palavra === palavraReversa ? "Sim" : "Não";
  document.getElementById("palindromoResult").textContent = `A palavra "${palavra}" é um palíndromo? ${resultado}`;
}

// 8 - Encontrar o maior número em um array
function encontrarMaiorNumero() {
  const input = document.getElementById("numerosArrayInput").value;
  const numeros = input.split(',').map(Number);
  const maior = Math.max(...numeros);
  document.getElementById("maiorNumeroResult").textContent = `O maior número no array [${numeros}] é: ${maior}`;
}

// 9 - Contar vogais em uma string
function contarVogais() {
  const str = document.getElementById("stringInput").value;
  const vogais = str.match(/[aeiouAEIOU]/g);
  const quantidade = vogais ? vogais.length : 0;
  document.getElementById("vogaisResult").textContent = `A string "${str}" tem ${quantidade} vogais.`;
}

// 10 - Soma dos números de um array
function somaArray() {
  const input = document.getElementById("numerosSomaInput").value;
  const numeros = input.split(',').map(Number);
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  document.getElementById("somaResult").textContent = `A soma dos números no array [${numeros}] é: ${soma}`;
}