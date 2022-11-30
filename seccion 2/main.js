addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    let cont =1   
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        if(cont <=50){
        let datosEntrada = Object.fromEntries(new FormData(e.target))
        let C= Number(datosEntrada.centigrados)
        let res= (C * 9/5) + 32 
        let tabla=document.querySelector("tbody")
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
            
                <td> ${C}  °</td>
            <td> ${res} °</td>

            </tr>
            `)
        cont++
        }
    })               
})