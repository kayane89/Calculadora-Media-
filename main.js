
function somarMedia() {

    const nota1 = parseFloat(document.getElementById('nota1').value)
    const nota2 = parseFloat(document.getElementById('nota2').value)
    const nota3 = parseFloat(document.getElementById('nota3').value)
    const media = (nota1 + nota2 + nota3) / 3

    let situaçao
    if (media < 4) {
        situaçao = "Você foi reprovado";
    } else if (media < 6.9) {
        situaçao = "Você está de recuperação"
    } else {
        situaçao = "Você foi aprovado"
    }
    document.getElementById('resultado').innerText = `Sua média é: ${media.toFixed(1)} - Sua situação é: ${situaçao}`
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
}
