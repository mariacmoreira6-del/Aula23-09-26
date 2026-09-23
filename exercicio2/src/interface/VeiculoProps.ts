export interface VeiculoProps{
    marca: string;
    modelo: string;
    ano: number;
    
}
 export interface CarroProps extends VeiculoProps{
    quantidadedeportas:number;
 }
 export interface MotoProps extends VeiculoProps{
    cilindrada:number;
 
 }