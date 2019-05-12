// Exercicio 1
function exercicio1() {
    var met = document.getElementById("met").value;
    var peso = document.getElementById("peso").value;
    var tempo = document.getElementById("tempo").value;

    var resultado = "Você possui " + (met * peso * tempo) + " Calorias";

    document.getElementById("resultado").innerHTML = resultado;
}
// ____________________________________________________________________________________________________

// Exercicio 2
function exercicio2() {
    var met2 = document.getElementById("met2").value;
    var peso2 = document.getElementById("peso2").value;
    var tempo2 = document.getElementById("tempo2").value;

    var resultado2 = "Você possui " + (met2 * peso2 * tempo2 / 60).toFixed(2) + " Calorias";

    document.getElementById("resultado2").innerHTML = resultado2;
}
// ____________________________________________________________________________________________________

// Exercicio 3
function exercicio3() {
    var exame = document.getElementById("exame").value;
    var resultExame;

    if (exame >= 1.05) {
        var resultExame = "Normal";
    }
    if (exame <= 1.04 && exame >= 0.89) {
        var resultExame = "Baixa Massa Óssea";
    }
    if (exame <= 0.88 && exame >= 0.00) {
        var resultExame = "Osteoporose";
    }
    if (exame < 0.00) {
        var resultExame = "Refazer o Exame";
    }
    document.getElementById("resultado3").innerHTML = "Resultado: "+resultExame;
}
// ____________________________________________________________________________________________________

// Exercicio 4
function exercicio4() {
    var celsius = document.getElementById("temperatura").value;
    
    var fahrenheit = (9 * celsius + 160) / 5 + " °F";

    document.getElementById("fahrenheit").innerHTML = fahrenheit;
}
// ____________________________________________________________________________________________________

// Exercicio 5
function exercicio5() {
    var horasTrab = document.getElementById("horas").value;
    var valorHora = document.getElementById("valor").value;

    var salario = "R$ " + (horasTrab * valorHora) + ",00";

    document.getElementById("salario").innerHTML = salario;
}
// ____________________________________________________________________________________________________

// Exercicio 6
function exercicio6() {
    var g = 50;
    var massaP = document.getElementById("massa").value;

    var dias = "Esse alimento durará mais " + (massaP * 1000) / g + " dias";

    document.getElementById("dias").innerHTML = dias;
}
// ____________________________________________________________________________________________________

// Exercicio 7
function exercicio7() {
    var usuario = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;

    if (usuario === "h") {
        var pesoIdeal = (72.7 * altura) - 58;
    } else {
        var pesoIdeal = (62.1 * altura) - 44.7;
    } 
    document.getElementById("pesoIdeal").innerHTML = "Seu peso ideal é: " + pesoIdeal.toFixed(2);
}
// ____________________________________________________________________________________________________

// Exercicio 8
function exercicio8() {
    var horaIni = document.getElementById("horaInicio").value;
    horaIni = horaIni.split(":");
    var totalMinutosIni = Number(horaIni[0] * 60) + Number(horaIni[1]);

    var horaFim = document.getElementById("horaFim").value;
    horaFim = horaFim.split(":");
    var totalMinutosFim = Number(horaFim[0] * 60) + Number(horaFim[1]);
    
    if (totalMinutosIni > totalMinutosFim) {
        totalMinutosFim = totalMinutosFim + 24*60;
    }

    var diferencaHoras = totalMinutosFim - totalMinutosIni;

    horaRet = Math.floor(diferencaHoras / 60);
	minRet = diferencaHoras % 60;

	var hora = horaRet.toString().padStart(2,0) + ":" + minRet.toString().padStart(2,0)

    document.getElementById("hora").innerHTML = hora;
}
// ____________________________________________________________________________________________________
