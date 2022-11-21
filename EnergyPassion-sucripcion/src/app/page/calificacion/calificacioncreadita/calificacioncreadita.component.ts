import { Trainer } from 'src/app/module/trainer';


import { ActivatedRoute,Params,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/module/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';


@Component({
  selector: 'app-calificacioncreadita',
  templateUrl: './calificacioncreadita.component.html',
  styleUrls: ['./calificacioncreadita.component.css']
})

export class CalificacioncreaditaComponent implements OnInit {
  calificacion: Calificacion = new Calificacion();
  mensaje:string="";
  edicion:boolean = false;
  id: number =0 ;

  constructor(private calificacionService:CalificacionService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
  });
    
}
aceptar():void{
  if (this.calificacion.idcalificacion > 0 && this.calificacion.calificado.length > 0 && this.calificacion.cliente) {
    if (this.edicion) {
      this.calificacionService.modificar(this.calificacion).subscribe(data => {
        this.calificacionService.listar().subscribe(data => {
          this.calificacionService.setLista(data);
        })
      })
    }
    else{
    this.calificacionService.insertar(this.calificacion).subscribe(data => {
      this.calificacionService.listar().subscribe(data => {
        this.calificacionService.setLista(data);
      })
    })
  }
    this.router.navigate(['calificacion']);
}
    else {
    this.mensaje = "Complete los valores requeridos";
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
