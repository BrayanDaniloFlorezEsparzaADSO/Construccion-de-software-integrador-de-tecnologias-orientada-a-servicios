addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    let cont =1   
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        if(cont <=50){
        let datosEntrada = Object.fromEntries(new FormData(e.target))
        let distancia=Number(42.195)
        let tiempo= Number(datosEntrada.tiempo)
            let res= (distancia/tiempo)
            let res2=   (res*0.001)
            let res4=res2.toFixed(2)
            let res3=res.toFixed(2)
        let tabla=document.querySelector("tbody")
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
            
                <td> ${cont}  </td>
                <td> ${distancia} KM </td>
                <td> ${tiempo} H </td>
                <td> ${res3}  M </td>
                <td> ${res4}  KM </td>
            </tr>
            `)
        cont++
        }
    })               
})