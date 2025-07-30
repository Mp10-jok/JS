const numero1 = parseFloat(prompt("digite o primeiro numero"))
const operador = prompt("Digite a operação!!")
const numero2 = parseFloat(prompt("digite o segundo numero"))

switch(operador) {
    case "+":
        const soma = numero1 + numero2
        alert('A soma entre ${numero1} + ${numero2}')
        break;
    case "-":
        resultado = numero1 - numero2
        break
    case "*":
        resultado = numero1 * numero2
        break
    case "/":
        resultado = numero1 / numero2
        break
}


//                         A              B
//const ambosPositivos = numero1 > 0 && numero2 > 0
//const peloMenosUmPositivo = numero1 > 0 || numero2 > 0
//const nenhumPositivo = numero1 <= 0 && numero2 <= 0

//console.log("Ambos são positivos?",ambosPositivos)
//console.log("Pelo menos um é positivo?",peloMenosUmPositivo)
//console.log("Nenhum é positivo?",nenhumPositivo)

/* alert("Bem vindo ao CinePro!!")
const numero = parseInt(prompt("Digite sua idade!!"))

if (numero >= 18) {
    alert("Sua entrada está permitida!!")
} else if (numero >= 16) {
    const acomp = confirm("Você veio acompanhado de algum responsável?")
    //responsavel = prompt("Você veio acompanhado de algum responsável?")
    if (acomp) {
        alert("Sua entrada está permitida, pois está com responsável!!")
    }
    else {
        alert("Sua entrada não está permitida!!")
    }
} else if (numero < 16) {
    alert("Sua entrada não está permitida!!")
} else {
    alert("Você não digitou um número!!")
}
 */
//if (responsável = sim) {
//console.log("Sua entrada foi liberada!!")
//} else if (responsável = não) {
//console.log("Sua entrada não está permitida!!")
//} 

