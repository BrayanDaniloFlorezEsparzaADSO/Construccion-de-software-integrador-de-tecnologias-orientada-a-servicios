addEventListener("DOMContentLoaded", (e)=>{
        let form=document.querySelector('#input')

        form.addEventListener("submit",(e)=>{
            e.preventDefault();       

            let datosEntrada = Object.fromEntries(new FormData(e.target))
                let dolares= Number (datosEntrada.dolares)
                let pesos= 4809.50
                let res= dolares * pesos
                //let config =intl.NumberFormat('de-DE',{style:'currency',currency:'COB'});
                //config= (config.format(dolares * pesos));
                //perdon pero no entendi como colocarle la libreria :')



                let tabla=document.querySelector("tbody");
                tabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td> ${dolares}  USD</td>
                        <td> ${res} COB</td>
                    </tr>
                    `)
        })         
        let form2=document.querySelector('#input2')

        form2.addEventListener("submit",(e)=>{
            e.preventDefault();       

            let datosEntrada2 = Object.fromEntries(new FormData(e.target))





                let pesos2= Number (datosEntrada2.pesos)
                let dolares2= 0.00021
                let res2= dolares2 * pesos2



                let tabla2=document.querySelector("tbody[name=tbody]");
                tabla2.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td> ${pesos2}COB  </td>
                        <td> ${res2} USD</td>
                    </tr>
                    `)


        })    
    })