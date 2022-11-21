

import { Cliente } from "./cliente";
import { Rutinas } from "./cliente";
import { Trainer } from "./trainer";
export class Reserva{
    idreserva:number=0;
    mensaje:string="";
    fecha:string ="";
    hora:string ="";
    Cliente:Cliente = new Cliente();
    Trainer:Trainer = new Trainer();
    Rutinas:Rutinas = new Rutinas();
}
