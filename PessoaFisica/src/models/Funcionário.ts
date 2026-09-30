import { PessoaFisica } from "./PessoaFisica.js";
import { FuncionarioProps } from "../interfaces/PessoaProps.js";

// Passamos FuncionarioProps para o Generic da classe mãe
export class Funcionario extends PessoaFisica<FuncionarioProps>{

    constructor(props: FuncionarioProps) {
        super(props);
    }

    public get getRegistro(): string { return this.props.registro; }
    public get getCarteiraTrabalho(): string { return this.props.carteiraTrabalho; }
    public get getPis(): string { return this.props.pis; }

    public set setRegistro(novoRegistro: string) {
        if (novoRegistro.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;}
        this.props.registro = novoRegistro;}
    
    public set setCarteiraTrabalho(novoCarteiraTrabalho: string) {
        if (novoCarteiraTrabalho.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;}
        this.props.carteiraTrabalho = novoCarteiraTrabalho;}
    
    public set setPis(novoPis: string) {
        if (novoPis.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;}
        this.props.pis = novoPis;

    }
       
}