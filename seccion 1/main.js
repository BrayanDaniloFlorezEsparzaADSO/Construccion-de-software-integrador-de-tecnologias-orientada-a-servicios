addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        let datosEntrada = Object.fromEntries(new FormData(e.target))

            let nciudad= datosEntrada.ciudad
            let f= Number(datosEntrada.Fahrenheit)
            let res=(f-32) / 1.8
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>

                    <td> ${nciudad}  </td>
                    <td> ${f}° </td>
                    <td> ${res}° </td>
                </tr>
                `)          
    })     
    let form1=document.querySelector('#input2')

    form1.addEventListener("submit",(e)=>{
        e.preventDefault();       

        let datosEntrada = Object.fromEntries(new FormData(e.target))

            let nciudad2= datosEntrada.ciudad2
            let f1= Number(datosEntrada.CENTIGRADOS)
            let res2=(f1* 1.8 )+ 32
            let tabla=document.querySelector("tbody[name=tbody]");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>

                    <td> ${nciudad2}  </td>
                    <td> ${f1} °</td>
                    <td> ${res2} °</td>
                </tr>
                `)          
    })        
})