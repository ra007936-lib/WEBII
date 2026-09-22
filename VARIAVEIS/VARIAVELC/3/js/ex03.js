const frm=document.querySelector("form")
const resp1=document.querySelector("h3")
const resp2=document.querySelector("h4")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numero=Number(frm.inNumero.value)
    let divisores=""
    let soma=0
    for (let i=1; i<numero; i++) {
       if (numero % i == 0) {
          if (divisores == "") {
             divisores += i
          } else {
             divisores += ", " + i
          }
          soma += i
       }
    }
    resp1.innerText=`Divisores de ${numero}: ${divisores} (Soma: ${soma})`
    if (numero == soma) {
       resp2.innerText=`${numero} É um Número Perfeito`
    } else {
       resp2.innerText=`${numero} Não É um Número Perfeito`
    }
})
