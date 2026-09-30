export interface PessoaFisicaProps{
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    dataNascimento: string;
}
 export interface ClienteProps extends PessoaFisicaProps{
    clientedesde:string;
 }
 export interface FuncionarioProps extends PessoaFisicaProps{
    registro:string;
    carteiraTrabalho: string;
    pis: string;
 }
 export interface EstagiarioProps extends PessoaFisicaProps{
    instituicaoensino: String;
    bolsaauxilio: number;
 }