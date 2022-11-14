import { Router, ActivatedRoute,Params } from '@angular/router';
import { CalificacionService } from './../../../service/calificacion.service';
import { Calificacion } from './../../../module/calificacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificacion-creadita',
  templateUrl: './calificacion-creadita.component.html',
  styleUrls: ['./calificacion-creadita.component.css']
})
export class CalificacionCreaditaComponent implements OnInit {
  calificacion:Calificacion=new Calificacion();
  mensaje:string="";
  edicion:boolean=false;
  id:number=0;

  constructor(private calificacionService:CalificacionService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar():void{
    if  (this.calificacion.id>0 && this.calificacion.calificado.length > 0 && this.calificacion.idTrainer > 0){
      if (this.edicion){
        this.calificacionService.modificar(this.calificacion).subscribe(data=>{
          this.calificacionService.listar().subscribe(data=>{
            this.calificacionService.setLista(data);
          })
        })
      }
      else{
        this.calificacionService.insertar(this.calificacion).subscribe(data=>{
          this.calificacionService.listar().subscribe(data=>{
            this.calificacionService.setLista(data);
          })
        })
      }
      this.router.navigate(['calificaciones']);
    }
    else{
      this.mensaje="Completa los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.calificacionService.listarId(this.id).subscribe(data => {
        this.calificacion = data;
      })
    }

  }

}
