import { Dispositivo } from "./Dispositivo.js";
import { LampadaInteligenteProps  } from "../interface/DispositivoProps.js";

export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps>{
    constructor (props: LampadaInteligenteProps){
        super(props);
    }
    public get getCorHexadecimal(): string { return this.props.corHexadecimal;}
    public get getNivelBrilho(): number { return this.props.nivelBrilho;}

    public set setCorHexadecimal(novoCorHexadecimal: string){
        if (novoCorHexadecimal.trim().length===0){
            return;
        }
        this.props.corHexadecimal= novoCorHexadecimal;
    }
     public set setNivelBrilho(novoNivelBrilho: number){
        if (novoNivelBrilho ===0){
            return;
        }
        this.props.nivelBrilho= novoNivelBrilho;
    }

}