import { Contabancaria } from "./Contabancaria.js";
import { ContabancariaProps, ContapoupancaProps } from "../interface/ContabancariaProps.js";

export class Contapoupanca extends Contabancaria<ContapoupancaProps>{

constructor(props: ContapoupancaProps) {
        super(props);
    }
public get getTaxaRendimentoMensal(): number { return this.props.taxaRendimentoMensal;}

public set setTaxaRendimentoMensal(novoTaxaRendimentoMensal: number) {
        if (novoTaxaRendimentoMensal=== 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.taxaRendimentoMensal = novoTaxaRendimentoMensal;
}}