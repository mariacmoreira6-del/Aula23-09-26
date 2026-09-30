import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps  } from "../interface/DispositivoProps.js";

export class Termostato extends Dispositivo<TermostatoProps>{
    constructor (props: TermostatoProps){
        super(props);
    }
    public get getTemperaturaAtual(): number { return this.props.temperaturaAtual;}
    public get getTemperaturaAlvo(): number { return this.props.temperaturaAlvo;}

    public set settemperaturaAtual(novotemperaturaAtual: number){
        if (novotemperaturaAtual===0){
            return;
        }
        this.props.temperaturaAtual= novotemperaturaAtual;
    }
     public set setTemperaturaAlvo(novoTemperaturaAlvo: number){
        if (novoTemperaturaAlvo ===0){
            return;
        }
        this.props.temperaturaAlvo= novoTemperaturaAlvo;
    }

}