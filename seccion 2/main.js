addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#hola')
    let conta= 1
    form.addEventListener("submit",(e)=>{
        e.preventDefault();   
        if(conta<=20){
            let datosEntrada = Object.fromEntries(new FormData(e.target))  
            let producto= datosEntrada.producto

            let precio=Number (datosEntrada.precio)
            let precio2= Number(datosEntrada.precio2)
            let precio3= Number(datosEntrada.precio3)
            let precio4= Number(datosEntrada.precio4)
            let precio5= Number(datosEntrada.precio5)
            let res= (precio+precio2+precio3+precio4+precio5)
            let res2= (res*4803.77)
            let res3= res2.toFixed(2)
            let tabla=document.querySelector("tbody")
            tabla.insertAdjacentHTML("beforeend",`
                
            <tr>
                
                <td > ${conta}</td>
                <td > ${producto}</td>
                <td > USD${res}</td>
                <td> $${res3}</td>
                
            </tr> 
                `)  
                        

                        
        conta++
        
        }
        
    })               
})