const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const valor = Number(frm.inValor.value)
    const minuto = Number(frm.inMinuto.value)
    const tempo = Math.ceil(minuto / 15)
    const valorfinal = (tempo * valor)
    resp.innerText = `Valor a Pagar R$: ${valorfinal.toFixed(2)}`
    e.preventDefault()
})
