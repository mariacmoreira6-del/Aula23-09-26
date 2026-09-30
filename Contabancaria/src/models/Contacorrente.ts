import { Contabancaria } from "./Contabancaria.js";
import { ContabancariaProps, ContacorrenteProps } from "../interface/ContabancariaProps.js";

export class Contacorrente extends Contabancaria<ContacorrenteProps>{

constructor(props: ContacorrenteProps) {
        super(props);
    }
public get getLimitechequeespecial(): number { return this.props.limitechequeespecial;}

public set setLimitechequeespecial(novoLimitechequeespecial: number) {
        if (novoLimitechequeespecial=== 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.limitechequeespecial = novoLimitechequeespecial;
}}