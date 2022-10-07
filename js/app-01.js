//const paises=['Francia','España','Portugal','Mexico','Argentina' ]
//async
const paises=[]


function nuevoPais(pais,caliback){

    pais.push(pais)
    console.log(`Agregando: $(pais)`)
    caliback()

}
function mostrarPaises(){
    console.log(paises)
}



function mostrarPaises(){
    setTimeout(()=>{
        nuevoPais('Alemania',mostrarPaises)
        setTimeout(()=>{
            nuevoPais('Mexico',mostrarPaises)
            setTimeout(()=>{
                nuevoPais('Francia',mostrarPaises)
            },3000)   
        },3000)
        
    },3000)
    
}
iniciarCallbackhell()
//mostrarPaises()
//nuevoPais('Alemania',mostrarPaises)