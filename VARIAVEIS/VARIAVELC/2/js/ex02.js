const frm=document.querySelector("form")
const resp=document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const chinchilas=Number(frm.inChinchilas.value)
    const anos=Number(frm.inAnos.value)
    let resposta=""
    let quantidade=chinchilas
    for (let i=1; i<=anos; i++) {
       resposta += `${i}° Ano: ${quantidade} Chinchilas\n`
       quantidade = quantidade * 3
    }
    resp.innerText= resposta
})
