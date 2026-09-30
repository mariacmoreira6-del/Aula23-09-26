export interface AnimalProps{
    nomepaciente: string;
    nomeTutor: string;
    pesoKG: number;
    
}
 export interface CachorroProps extends AnimalProps{
    porte: string;
    precisaTosa: Boolean;
 }
 export interface GatoProps extends AnimalProps{
    fivFelvTestado: Boolean;
    isIndoor: Boolean;
 
 }