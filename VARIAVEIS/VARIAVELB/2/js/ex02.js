const frm=document.querySelector("form")
const resp=document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const permitida=Number(frm.inPermitida.value)
    const condutor=Number(frm.inCondutor.value)
    const limite=permitida*1.20
    let situacao

    if (condutor <= permitida) {
        situacao="Sem Multa"
    } else if (condutor <= limite) {
        situacao="Multa Leve"
    } else {
        situacao="Multa Grave"
    }

    resp.innerText=`Situação: ${situacao}`
})
