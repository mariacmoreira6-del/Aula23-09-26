import { DispositivoProps } from "../interface/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps= DispositivoProps>{

constructor(protected props: T) {}
public get getIdRede(): String { return this.props.idRede;}
public get getNomeLocal(): string {return this.props.nomeLocal; }
public get getIsLigado(): number{return this.props.isLigado; }
    
    public set setIdRede(novoIdRede: string){
        if(novoIdRede.trim().length === 0){
            console.log("\n ERRO: o campo não pode estar vazio!")
            return;
        }
        this.props.idRede= novoIdRede;
    
    }
     public set setNomeLocal(novoNomeLocal: string){
        if(novoNomeLocal.trim().length=== 0){
            console.log("\n ERRO: o campo não pode estar vazio!")
            return;
        }
        this.props.nomeLocal= novoNomeLocal;
    }
     public set setIsLigado(novoIsLigado: number){
        if(novoIsLigado=== 0){
            console.log("\n ERRO: o campo não pode estar vazio!")
            return;
        }
        this.props.isLigado= novoIsLigado;
    }
}
