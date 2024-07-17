import { tmanhoPizza } from "./tamanhoPizza"
import{saborPizza}from"./tamanhoPizza"



 
 
 export class pizza {
    sabor: saborPizza
    tamanho : tmanhoPizza
    preco : number

    constructor( saborPizza:saborPizza ,tamanhoPizza:tmanhoPizza, preco: number){
        this.sabor= saborPizza
        this.preco = preco
        this.tamanho= tamanhoPizza
    }
    descricao(): void{
    console.log(`A pizza ${saborPizza} e  tem ${this.tamanho} e custa ${this.preco}`);
}

 }
  
 
 