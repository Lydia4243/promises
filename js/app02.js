//const aplicarDescuento=newPromise((resolverreject)=>{
    //const descuento=true;

    //if(descuento){
     //   resolverreject('Descuento se ha Aplicado')
   // }else{
    //    resolverreject('No se pudo aplicar el descuento')
    //}    
//    })

//aplicarDescuento.then(resultado=>{
 //   console.log(resultado)
//}).catch(error=>{
//    console.log(error)
//})

//console.log(aplicarDescuento)


    const paises=[]
    const nuevoPais=pais=>new Promise(resolve=>{
        setTimeout(()=>{
            paises.push(pais)
            resolve(`Agregado: $(pais)`)
        },3000)
        
        

    })

    nuevoPais('Mexico').then(resultado=>{
        console.log(resultado)
        console.log(paises)
        return nuevoPais('EUA')
    })
    .then(resultado =>{
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultado=>{
        console.log(resultado)
        console.log(paises)
    })
        