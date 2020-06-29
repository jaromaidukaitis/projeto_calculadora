let acumulador = "";
let resultado;
let phText = "";

let calculadora = {
	memoria: document.querySelector("#memoria"),
	placeholder: document.querySelector("#placeholder"),

	botaoUm: document.querySelector("#numeroUm"),
	botaoDois: document.querySelector("#numeroDois"),
	botaoTres: document.querySelector("#numeroTres"),
	botaoQuatro: document.querySelector("#numeroQuatro"),
	botaoCinco: document.querySelector("#numeroCinco"),
	botaoSeis: document.querySelector("#numeroSeis"),
	botaoSete: document.querySelector("#numeroSete"),
	botaoOito: document.querySelector("#numeroOito"),
	botaoNove: document.querySelector("#numeroNove"),
	botaoZero: document.querySelector("#numeroZero"),
	botaoSoma: document.querySelector("#botaoSoma"),
	botaoSubtracao: document.querySelector("#botaoSubtracao"),
	botaoProduto: document.querySelector("#botaoProduto"),
	botaoDivisao: document.querySelector("#botaoDivisao"),
	aoQuadrado: document.querySelector("#aoQuadrado"),
	raizQuadrada: document.querySelector("#raizQuadrada"),
	botaoPorcentagem: document.querySelector("#botaoPorcentagem"),
	botaoIgual: document.querySelector("#botaoIgual"),
	botaoTrocaSinal: document.querySelector("#trocaSinal"),
	botaoVirgula: document.querySelector("#virgula"),
	abreP: document.querySelector("#abreParenteses"),
	fechaP: document.querySelector("#fechaParenteses"),
	limpar: document.querySelector("#limpar"),
	limparTudo: document.querySelector("#limparTudo"),
	backspace: document.querySelector("#backspace"),

	naoDuplicar: function () {
		if (
			acumulador[acumulador.length - 1] == "+" ||
			acumulador[acumulador.length - 1] == "-" ||
			acumulador[acumulador.length - 1] == "/" ||
			acumulador[acumulador.length - 1] == "*"
		) {
			acumulador = acumulador.substring(0, acumulador.length - 1);
		}
	},

	limparTudo: limparTudo.addEventListener("click", function () {
		acumulador = "";
		phText = "";
		calculadora.memoria.textContent = "";
		calculadora.placeholder.textContent = "";
	}),

	limpar: limpar.addEventListener("click", function () {
		acumulador = acumulador.substring(0, acumulador.length - 1);
		calculadora.memoria.textContent = calculadora.memoria.textContent.substring(
			0,
			calculadora.memoria.textContent.length - 1
		);
	}),

	apagar: backspace.addEventListener("click", function () {
		acumulador = acumulador.substring(0, acumulador.length - 1);
		phText = phText.substring(0, phText.length - 1);
		calculadora.placeholder.textContent = calculadora.placeholder.textContent.substring(
			0,
			calculadora.placeholder.textContent.length - 1
		);
	}),

	somar: botaoSoma.addEventListener("click", function () {
		if (acumulador == "") {
			acumulador += calculadora.placeholder.textContent;
		}
		calculadora.naoDuplicar();
		acumulador += this.textContent;
		memoria.textContent = acumulador;
		phText = "";
		console.log(acumulador);
	}),

	subtrair: botaoSubtracao.addEventListener("click", function () {
		if (acumulador == "") {
			acumulador += calculadora.placeholder.textContent;
		}
		calculadora.naoDuplicar();
		acumulador += this.textContent;
		memoria.textContent = acumulador;
		phText = "";
		console.log(acumulador);
	}),

	multiplicar: botaoProduto.addEventListener("click", function () {
		if (acumulador == "") {
			acumulador += calculadora.placeholder.textContent;
		}
		calculadora.naoDuplicar();
		acumulador += "*";
		memoria.textContent = acumulador;
		phText = "";
		console.log(acumulador);
	}),

	dividir: botaoDivisao.addEventListener("click", function () {
		if (acumulador == "") {
			acumulador += calculadora.placeholder.textContent;
		}
		calculadora.naoDuplicar();
		acumulador += "/";
		memoria.textContent = acumulador;
		phText = "";
		console.log(acumulador);
	}),

	elevarAoQuadrado: aoQuadrado.addEventListener("click", function () {
		if (acumulador == "") {
			acumulador += calculadora.placeholder.textContent;
		}
		calculadora.naoDuplicar();
		acumulador += "**";
		memoria.textContent = acumulador;
		phText = "";
		console.log(acumulador);
	}),

	tirarRaiz: raizQuadrada.addEventListener("click", function () {
		console.log(this.textContent);
	}),

	porcento: botaoPorcentagem.addEventListener("click", function () {
		console.log(this.textContent);
	}),

	igual: botaoIgual.addEventListener("click", function () {
		memoria.textContent = acumulador;
		resultado = eval(acumulador);
		placeholder.textContent = resultado;
		acumulador = "";
		phText = "";
	}),

	botoes: document.querySelectorAll(".numeros").forEach(function (botao) {
		botao.addEventListener("click", function () {
			acumulador += event.target.textContent;
			phText += event.target.textContent;
			calculadora.placeholder.innerText = phText;
			console.log(acumulador + " a " + phText + " b " + memoria.textContent);
		});
	}),
};

/*botaoSoma.onclick = function () {
	acumulador += calculadora.placeholder.innerText;
	acumulador += " + ";
	calculadora.display.innerText = acumulador;
	calculadora.placeholder.innerText = "";
};*/

/*botaoIgual.onclick = function () {
	//TODO: checar se existe conteúdo dentro do display

	//colocando conteúdo do display no acumulador
	//acumulador += calculadora.display.innerText;
	//resolvendo conta (conteúdo acumulador)
	let resultado = eval(acumulador);
	//colocando no display o conteúdo do acumulador
	calculadora.placeholder.innerText = resultado;
	// limpando o acumulador
	acumulador = "";
};*/
