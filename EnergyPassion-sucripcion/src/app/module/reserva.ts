

import { Cliente } from "./cliente";
import { rutinas } from "./rutinas";
import { Trainer } from "./trainer";
export class Reserva{
    idreserva:number=0;
    mensaje:string="";
    fecha:string ="";
    hora:string ="";
    cliente:Cliente = new Cliente();
    trainer:Trainer = new Trainer();
    rutinas:rutinas = new rutinas();
}
