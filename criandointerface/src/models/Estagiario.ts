import { PessoaFisica } from "./PessoaFisica.js";
import { EstagiarioProps } from "../interfaces/PessoaProps.js";

// Passamos EstagiarioProps para o Generic da classe mãe
export class Estagiario extends PessoaFisica<EstagiarioProps>{

    constructor(props: EstagiarioProps) {
        super(props);
    }

    public get getInstituicaoensino(): String { return this.props.instituicaoensino; }
    public get getBolsaauxilio(): number { return this.props.bolsaauxilio; }

    public set setInstituicaoensino(novoInstituicaoensino: string) {
        this.props.instituicaoensino = novoInstituicaoensino;
    }
     public set setBolsaauxilio(novoBolsaauxilio: number) {
        this.props.bolsaauxilio = novoBolsaauxilio;
    }
}