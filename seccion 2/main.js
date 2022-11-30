addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    let cont =1   
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        if(cont <=50){
        let datosEntrada = Object.fromEntries(new FormData(e.target))

            let año=datosEntrada.año
            // let res= año/4
            if (año % 4 != 0){
                let tabla=document.querySelector("tbody");
                tabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td>${año}  </td>
                        <td>  </td>
                        <td> X  </td>
                    </tr>
                    `)
            }
            
            
            else if (año % 4 == 0 & año % 100 != 0){
                let tabla=document.querySelector("tbody");
                tabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td>${año}  </td>
                        <td> X </td>
                        <td>   </td>
                    </tr>
                    `)
            } 

            else if(año % 4 == 0 & año % 100 == 0 & año % 400 != 0){
                let tabla=document.querySelector("tbody");
                tabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td>${año}  </td>
                        <td>  </td>
                        <td> X  </td>
                    </tr>
                    `)
            } 
            
            
            else if(año % 4 == 0 & año % 100 == 0 & año % 400 == 0){
                let tabla=document.querySelector("tbody");
                tabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td>${año}  </td>
                        <td>  X </td>
                        <td>   </td>
                    </tr>
                    `)
            } 
            
        
        }
    })               
})