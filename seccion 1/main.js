addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')
    let cont =1   
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        if(cont <=50){
        let datosEntrada = Object.fromEntries(new FormData(e.target))
            let observaciones= datosEntrada.observaciones
            let hora= (datosEntrada.hora)

            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${cont}  </td>
                    <td> ${observaciones}  </td>
                    <td> ${hora} </td>
                </tr>
                `) 
            cont++
        }
    })               
})