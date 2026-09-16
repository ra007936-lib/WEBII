const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const produto = (frm.inProduto.value)
    const preco = Number(frm.inPreco.value)
    const terceiro = (preco / 2)
    const precofinal = (preco * 2 + terceiro)
    resp.innerText = `${produto} - Promoção: Leve 3 por R$: ${precofinal.toFixed(2)}\nO 3° produto custa apenas R$: ${terceiro.toFixed(2)}`
    e.preventDefault()
})
