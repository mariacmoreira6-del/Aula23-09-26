import { AnimalProps } from "../interface/AnimalProps.js";

export class Animal<T extends AnimalProps= AnimalProps>{

    constructor(protected props: T) {}
    public get getNomepaciente(): string { return this.props.nomepaciente;}
    public get getNomeTutor(): string{ return this.props.nomeTutor; }
    public get getPesoKG(): number{return this.props.pesoKG; }
    
    public set setNomepaciente(novoNomepaciente: string){
        if(novoNomepaciente.trim().length === 0){
            console.log("\n ERRO: o campo não pode estar vazio!")
            return;
        }
        this.props.nomepaciente= novoNomepaciente;
    }
     public set setNomeTutor(novoNomeTutor: string){
        if(novoNomeTutor.trim().length === 0){
            console.log("\n ERRO: o campo não pode estar vazio!")
            return;
        }
        this.props.nomeTutor= novoNomeTutor;
    }
     public set setPesoKG(novoPesoKG: number){
        if(novoPesoKG=== 0){
            console.log("\n ERRO: o campo não pode estar vazio!")
            return;
        }
        this.props.pesoKG= novoPesoKG;
    }
}
