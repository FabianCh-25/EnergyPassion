import { tiposuscripcion } from './tiposuscripcion';


export class Subscripcion{
    idSuscripcion:number=0;
    Precio_plan:number = 0;
    Descripcion_plan:string ="";
    Tiposuscripcion:tiposuscripcion = new tiposuscripcion();
  }
  