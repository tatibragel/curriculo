	var nome;
	nome = prompt("Informe seu nome");

		while (nome==""){
			alert ("Você não digitou seu nome");
			nome = prompt("Informe seu nome");
		}

function formacao (){
	var formacao = '->Tecnólogo em Análise e Desenvilmento de Sistemas, modalidade EAD pela Uninter';

		document.getElementById("profissional").innerHTML += "<br>" + formacao + "<br>";
}
function idiomas (){
	var idiomas = '->Inglês e Espanhol nível básico ';
		document.getElementById("profissional").innerHTML += "<br>" + idiomas + "<br>";
}
function cursos (){
	var cursos = '->HTML, CSS, JavaScript, C, Java';
		document.getElementById("profissional").innerHTML += "<br>" + cursos + "<br>";
}
function outros (){
	var outros = '->Cursei teatro durante um ano, fui membra dirigente sublente do CREAJr e fiquei entre os 200 no 1° Hackathon de carreiras da positivo ';

		document.getElementById("profissional").innerHTML += "<br>" + outros + "<br>";
}
function fechar(){
	while (true) {
		exit;
	}
}
