addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#hola')
    let conta= 1
    let suma=0
    form.addEventListener("submit",(e)=>{
        e.preventDefault();   
        if(conta<=20){
            let datosEntrada = Object.fromEntries(new FormData(e.target))  
            let cliente= datosEntrada.cliente
            let valor=Number(datosEntrada.valor)
            let des=50000
            
            if(valor>=des){
                let res= valor*0.20
                let res2=valor-res
                // let suma1=res2
                let tabla=document.querySelector("tbody")
                tabla.insertAdjacentHTML("beforeend",`
                    
                <tr>
                    <td > ${conta}</td>
                    <td > ${cliente}</td>
                    <td > ${valor}</td>
                    <td > X</td>
                    <td > </td>
                    <td >${res2} </td>
                   
                </tr> 
                    `)     
                    let total = document.querySelector("#hola2")  
                    total.innerHTML = " "
                total.insertAdjacentHTML("beforeend", `${suma+=res2}`)  
            }   
            
            else{
                // let suma= valor 
                let tabla=document.querySelector("tbody")
                tabla.insertAdjacentHTML("beforeend",`
                    
                <tr>
                    <td > ${conta}</td>
                    <td > ${cliente}</td>
                    <td > ${valor}</td>
                    <td > </td>
                    <td > X</td>
                    <td >${valor} </td>
                </tr> 
                    `) 
                    let total = document.querySelector("#hola2")  
                    total.innerHTML = " "
                    total.insertAdjacentHTML("beforeend", `${suma+=valor}`) 
            }

        conta++
        
        }
    })               
})