addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    let cont =1   
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        if(cont <=50){
        let datosEntrada = Object.fromEntries(new FormData(e.target))
        let taller1= Number(datosEntrada.taller_1)
        let taller2= Number(datosEntrada.taller_2)
        let quiz=Number(datosEntrada.quiz)
        let parcial=Number(datosEntrada.parcial)

        let res= taller1+taller2
        let res2= (res *15)/100

        let res3=(quiz*15)/100

        let res4=(parcial*70)/100

        let res5= res2+res3+res4
        if(res5>=70){
          let tabla=document.querySelector("tbody")
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
            
                <td> ${cont}</td>
                <td> ${taller1}</td>
                <td> ${taller2}</td>
                <td> ${quiz}</td>
                <td> ${parcial}</td>
                <td> ${res5}</td>
                <td> aprobado</td>
                

            </tr>
            `)  
        }
        else{
            let tabla=document.querySelector("tbody")
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
            
                <td> ${cont}</td>
                <td> ${taller1}</td>
                <td> ${taller2}</td>
                <td> ${quiz}</td>
                <td> ${parcial}</td>
                <td> ${res5}</td>
                <td> reprobado</td>
                

            </tr>
            `)
        }

        
        cont++
        }
    })               
})