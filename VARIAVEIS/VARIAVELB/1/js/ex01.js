const frm=document.querySelector("form")
const resp=document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero=Number(frm.inNumero.value)

    // let resultado
    // if (numero % 2 == 0) {
    //     resultado="Par"
    // } else {
    //     resultado="Ímpar"
    // }

    const resultado = numero % 2 == 0 ? "Par" : "Ímpar"

    resp.innerText=`${numero} é ${resultado}`
})
