addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')
    let conta= 1
    form.addEventListener("submit",(e)=>{
        e.preventDefault();   
        let datosEntrada = Object.fromEntries(new FormData(e.target))    
        // let h3=document.querySelector("#h4")
        // h3.insertAdjacentHTML("beforeend",`
        // Al TERMINO DE ${cont} SE DOBLARA
        // `)
        if(conta <=6){
            
        let datosEntrada = Object.fromEntries(new FormData(e.target))
        let año =Number(datosEntrada.año)  
        let capital= Number(datosEntrada.capital)
        let interes=Number(datosEntrada.interes)
        let res= (capital *interes)/100
        let res1=capital+res
        let res3= res1*2

        
            let tabla=document.querySelector("tbody")
        tabla.insertAdjacentHTML("beforeend",`
            <tr>
            
                <td> ${conta}</td>
                <td>$ ${capital}</td>
                <td> ${interes}%</td>
                <td> $${res1}</td>
                <td> ${año}</td>
                <td> ${res3}</td>
                
                

            </tr>
            `)
        conta++
            // if(conta=año){
            //     let res3= res1*2
            //     let tabla=document.querySelector("tbody")
            //     tabla.insertAdjacentHTML("beforeend",`
            //         <tr>
                    
            //             <td> ${conta}</td>
            //             <td> ${capital}</td>
            //             <td> ${interes}</td>
            //             <td> ${res1}</td>
            //             <td> ${año}</td>
            //             <td> ${res3}</td>
                        
                        
                        
        
            //         </tr>
            //         `)
           
            // }

        
        }
        
        
        
    })               
})