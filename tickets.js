"use strict"
document.querySelector("form.row").addEventListener("submit", (e) => {
    e.preventDefault();
    const data=Object.fromEntries(new FormData(e.target))
    let total="";
    let valorTicket=200;
    total=valorTicket*data.cantidad*data.categoria;
    document.querySelector("#precioTotal").innerHTML=`Total a Pagar: $ ${total}`
    console.log(data);
})
document.querySelector("#btnBorrar").addEventListener("click",()=>{
    document.querySelector("form.row").reset();
    document.querySelector("#precioTotal").innerHTML=`Total a Pagar: $`
})