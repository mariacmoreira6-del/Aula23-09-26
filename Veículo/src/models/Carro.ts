import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interface/VeiculoProps.js";

export class Carro extends Veiculo<CarroProps>{

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQuantidadedeportas(): number { return this.props.quantidadedeportas; }

    public set setQuantidadedeportas(novoQuantidadedeportas: number) {
        this.props.quantidadedeportas = novoQuantidadedeportas
    }
}