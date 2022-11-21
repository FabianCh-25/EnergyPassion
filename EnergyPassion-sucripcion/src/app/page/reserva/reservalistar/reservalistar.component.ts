import { ReservadeleteComponent } from './reservadelete/reservadelete.component';
import { Component,OnInit } from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';
import { MatTableDataSource } from '@angular/material/table';
import { Reserva } from 'src/app/module/reserva';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reservalistar',
  templateUrl: './reservalistar.component.html',
  styleUrls: ['./reservalistar.component.css']
})
export class ReservalistarComponent {
lista: Reserva[]=[];
dataSource:MatTableDataSource<Reserva>=new MatTableDataSource();
DisplayedColumns:string[]=['idreserva','fecha','hora', 'mensaje','cliente','trainer','rutinas','acciones','acciones2']
private idMayor:number=0;
constructor (private pService:ReservaService,private dialog:MatDialog){}
ngOnInit(): void{
  this.pService.listar().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })
  this.pService.getLista().subscribe(data =>{
    this.dataSource=new MatTableDataSource(data);
  });
}
confirmar(id:number){
  this.idMayor=id;
  this.dialog.open(ReservadeleteComponent);
}
eliminar(id:number)
{
  this.pService.eliminar(id).subscribe(()=>{
    this.pService.listar().subscribe(data=>{
      this.pService.setLista(data);
    })
  })
}
}
