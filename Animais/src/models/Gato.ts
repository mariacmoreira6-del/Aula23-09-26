import { Animal } from "./Animal.js";
import { AnimalProps, GatoProps } from "../interface/AnimalProps.js";

export class Gato extends Animal<GatoProps>{
    constructor (props: GatoProps){
        super(props);
    }
    public get getFivFelvTestado(): Boolean { return this.props.fivFelvTestado;}
    public get getIsIndoor(): Boolean { return this.props.isIndoor;}

    public set setFivFelvTestado(novoFivFelvTestado: Boolean){
        if (novoFivFelvTestado==null){
            return;
        }
        this.props.fivFelvTestado= novoFivFelvTestado;
    }
     public set setIsIndoor(novoIsIndoor: Boolean){
        if (novoIsIndoor===null){
            return;
        }
        this.props.isIndoor= novoIsIndoor;
    }

}