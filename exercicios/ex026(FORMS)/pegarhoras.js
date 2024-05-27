
function carregar(){
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0') // para ter dois caracteres e caso n tenha colocar um zero
    const mes = String(data.getMonth()+ 1).padStart(2, '0')
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minutos = data.getMinutes()

    const diaProva = document.getElementById("diaProva")
    const periodoLetivo = document.getElementById("txtMes")
    const horaProva = document.getElementById("horaProva")

    diaProva.value = `${ano}-${mes}-${dia}`
    periodoLetivo.value = `${ano}-${mes}`
    horaProva.value = `${hora}:${minutos}`


}