import { Calificacion } from "./calificacion";
import { rutinas } from "./rutinas";
export class Trainer{

  idtrainer:number=0;
  nombre:string = "";
  apellido:string = "";
  edad:number=0;
  horario:string= ""; //ver si sepuede cambiar a date
  nickname:string="";
  sexo:string="";
  password:string="";
  email:string= "";
  calificacion:Calificacion = new Calificacion();
  rutinas:rutinas = new rutinas();


  }
