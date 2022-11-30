addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    let cont =1   
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        if(cont <=50){
        let datosEntrada = Object.fromEntries(new FormData(e.target))

            let nacimiento= datosEntrada.nacimiento
            let actual= datosEntrada.actual
            let res= actual-nacimiento
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${nacimiento}  </td>
                    <td> ${actual}  </td>
                    <td> ${res  }  </td>
                </tr>
                `)

            cont++
        }
    })               
})