import { SubscripcionService } from './../../../service/subscripcion.service';
import { TiposuscripcionService } from './../../../service/tiposuscripcion.service';
import { tiposuscripcion } from './../../../module/tiposuscripcion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';


@Component({
  selector: 'app-tiposuscripcioncreaedita',
  templateUrl: './tiposuscripcioncreaedita.component.html',
  styleUrls: ['./tiposuscripcioncreaedita.component.css']
})
export class TiposuscripcioncreaeditaComponent implements OnInit {
  tiposuscripcion: tiposuscripcion = new tiposuscripcion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private TiposuscripcionService:TiposuscripcionService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] !=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tiposuscripcion.idtiposuscripcion > 0 ) {
      if  (this.edicion){
      this.TiposuscripcionService.modificar(this.tiposuscripcion).subscribe(data => {
        this.TiposuscripcionService.listar().subscribe(data => {
          this.TiposuscripcionService.setLista(data);
        })
      })
    }
    else {
      this.TiposuscripcionService.insertar(this.tiposuscripcion).subscribe(data =>{
        this.TiposuscripcionService.listar().subscribe(data => {
          this.TiposuscripcionService.setLista(data);
        })
      })
    }
      this.router.navigate(['tiposuscripcion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.TiposuscripcionService.Listarid(this.id).subscribe(data => {
        this.tiposuscripcion = data;
      })
    }
  }
}
