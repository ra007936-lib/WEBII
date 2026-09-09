const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const medicamento = (frm.inMedicamento.value)
    const preco = Number(frm.inPreco.value)
    const precofinal = ()
    resp.innerText = `Valor a Pagar R$: `
    e.preventDefault()
})
