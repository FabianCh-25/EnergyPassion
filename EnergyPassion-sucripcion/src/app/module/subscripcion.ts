import { tiposuscripcion } from './tiposuscripcion';


export class Subscripcion{
    id:number=0;
    precio_plan:number = 0;
    descripcion_plan:string ="";
    tiposuscripcion:tiposuscripcion=new tiposuscripcion();
  }
  