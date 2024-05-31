function calcularIdade(){
    const data = new Date()
    const anoAtual = data.getFullYear()
    const anoNascimento = Number(document.getElementById("iAno").value)
    const saidaIdade = document.getElementById("iIdade").innerHTML = anoAtual - anoNascimento
}