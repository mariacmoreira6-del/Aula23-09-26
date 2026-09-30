import { ContabancariaProps } from "../interface/ContabancariaProps.js";

export class Contabancaria<T extends ContabancariaProps= ContabancariaProps>{

constructor(protected props: T) {}
public get getNumeroConta(): string { return this.props.numeroConta; }
public get getTitular(): string { return this.props.titular;}
public get getSaldo(): number { return this.props.saldo;}

public set setNumeroConta(novoNumeroConta: string) {
        if (novoNumeroConta.trim().length === 0) {
            console.log("\n ERRO: O campo não pode estar vazio!");
            return;
        }
        this.props.numeroConta = novoNumeroConta;
    }

    public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O Campo não pode estar vazio!");
            return;
        }
        this.props.titular = novoTitular;
    }

    public set setSaldo(novoSaldo: number) {
        if (novoSaldo === 0) {
            console.log("\n ERRO: O Campo não pode estar vazio!");
            return;
        }
        this.props.saldo = novoSaldo;
    }

}