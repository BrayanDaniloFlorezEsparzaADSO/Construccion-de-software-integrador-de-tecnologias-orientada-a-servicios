addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')
    let conta= 1
    form.addEventListener("submit",(e)=>{
        e.preventDefault();   
        if(conta<=20){
            let datosEntrada = Object.fromEntries(new FormData(e.target))  
            let numero=Number(datosEntrada.numero)
            let numero2=25
            let numero3=numero2
            let numero4=numero
                        if(numero<numero2){
                            let tabla=document.querySelector("tbody")
                            tabla.insertAdjacentHTML("beforeend",`
                                <tr>
        
                                    
                                    <td> ${conta}</td>
                                    <td> ${numero}</td>
                                    <td><</td>
                                    <td>X</td>
                                    <td></td>
                                    <td> ${numero2}</td>
                                    
        
        
        
                                </tr>
                                `)  
                        }
                        else if(numero2=numero  ){
                            let tabla=document.querySelector("tbody")
                            tabla.insertAdjacentHTML("beforeend",`
                            <tr>
                                <td> ${conta}</td>
                                <td> ${numero}</td>
                                <td>=</td>
                                <td></td>
                                <td>X</td>
                                <td> ${numero2}</td>
                            



                            </tr> 
                            `)
                        }
                        

                        else if(numero4>numero3){
                            let tabla=document.querySelector("tbody")
                            tabla.insertAdjacentHTML("beforeend",`
                            <tr>
        
                                    <td> ${numero4}</td>
                                    <td>></td>
                                    <td> ${numero3}</td>
                                    
        
        
        
                                </tr>
                            `)
                        }

                        
        conta++
        
        }
        
            
        
        
    })               
})