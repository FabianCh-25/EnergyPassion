import { subscripcion } from './subscripcion';
import { rutinas } from "./rutinas";


export class Cliente{
  idcliente:number =0;
  nombre:string= "";
  apellido:string=  "";
  fechanacimiento:string="" ;
  edad:number= 0;
  username:string= "";
  password:string= "";
  sexo:string= "";
  email:string ="";
  talla:number=0 ;
  peso: number=0;
  condfisica:string= "";
  objetivofisico:string= "";

  rutinas:rutinas =new rutinas();
  suscripcion:subscripcion =new subscripcion();
  }
