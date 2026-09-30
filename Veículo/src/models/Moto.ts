import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interface/VeiculoProps.js";

export class Moto extends Veiculo<MotoProps>{

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindrada(): number { return this.props.cilindrada; }

    public set setCilindrada(novoCilindrada: number) {
        this.props.cilindrada = novoCilindrada
    }
}