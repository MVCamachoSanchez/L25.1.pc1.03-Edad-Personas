export default class Cl_Programa{
    constructor(){
        this.acmEdad = 0;
        this.cntPersonas = 0 ;
    }

    procesarPersona(per){
        //Acumular la edad
        this.acmEdad += per.edad;

        //Contar las personas
        this.cntPersonas++;
    }
    
    promedio(){
        return this.acmEdad/this.cntPersonas;
    }
}