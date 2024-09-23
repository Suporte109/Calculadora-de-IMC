function calcularImc() {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Você está abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        alert("Você está com o peso normal");
    } else if (imc >= 25 && imc < 30) {
        alert("Você está com sobrepeso");
    } else if (imc >= 30 && imc < 40) {
        alert("Você está com obesidade");
    } else if (imc >= 40) {
        alert("Você está com obesidade leve");
    }
}