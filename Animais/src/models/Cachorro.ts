import { Animal } from "./Animal.js";
import { AnimalProps, CachorroProps } from "../interface/AnimalProps.js";

export class Cachorro extends Animal<CachorroProps>{
    constructor (props: CachorroProps){
        super(props);
    }
    public get getPorte(): string { return this.props.porte;}
    public get getPrecisaTosa(): Boolean { return this.props.precisaTosa;}

    public set setPorte(novoPorte: string){
        if (novoPorte.trim().length===0){
            return;
        }
        this.props.porte= novoPorte;
    }
     public set setPrecisaTosa(novoPrecisaTosa: Boolean){
        if (novoPrecisaTosa===null){
            return;
        }
        this.props.precisaTosa= novoPrecisaTosa;
    }

}