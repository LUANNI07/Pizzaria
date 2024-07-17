let ficcao ={
    "fundacao":"Isac As Imov" ,
    "duma": " Frank Herbert"
};
for ( let Livro in ficcao ){
     console.log(`Autos do livro ${Livro} : ${ficcao[Livro]}`);
     
};
 console.log()


 
/*let meuObjeto= {
   nome1:`valor 1`
 nome2:`valor 2`
  nome3:`valor 3`
  nome4:`valor 4`
  nome5:`valor 5`
}


/*console.log();*/



 for ( let elemento in meuObjeto){
    console.log(` O elemento $`);
    
 }



 let meusLivros = ["Fundacao","Duna"," orgulho e Preconceito" ]:

 for (let Livro of meusLivros){
    console.log(Livro);;



    let listaDeFrutas=[`pera`,`maça`,`Maracuja`]
    for (let frutas of listaDeFrutas ){
        console.log(frutas);
        
    }





    let tolkienLivros = [`Senhor dos aneis `,`O hobbit`,`Contos Inacabados`];
    tolkienLivros.forEach((Livro=>){
        console.log(`Eu já li ${Livro}`);
    })
       
        

 const arr =["carro","moto","bicicleta"]
 arr.forEach((Elemento,index,array){
    console.log(`Elemento ${ Elemento} no indice ${ index}`);
    console.log(`Array original: `,Array);
    
    
 })