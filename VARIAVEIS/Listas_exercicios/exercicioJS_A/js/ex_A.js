const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const medicamento = (frm.inMedicamento.value)
    const preco = Number(frm.inPreco.value)
    const precofinal = (preco * 2)
    resp.innerText = `Promoção de ${medicamento}\nLeve 2 por apenas R$ ${Math.floor(precofinal)}`
    e.preventDefault()
})
