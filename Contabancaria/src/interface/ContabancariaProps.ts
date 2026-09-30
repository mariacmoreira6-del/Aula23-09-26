export interface ContabancariaProps{
    numeroConta: string;
    titular: string;
    saldo: number;
    
}
 export interface ContacorrenteProps extends ContabancariaProps{
    limitechequeespecial:number;
 }
 export interface ContapoupancaProps extends ContabancariaProps{
    taxaRendimentoMensal:number;
 
 }