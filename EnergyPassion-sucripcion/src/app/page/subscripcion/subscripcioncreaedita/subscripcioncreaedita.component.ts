import { tiposuscripcion } from './../../../module/tiposuscripcion';
import { SubscripcionService } from './../../../service/subscripcion.service';
import { subscripcion } from 'src/app/module/subscripcion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { TiposuscripcionService } from 'src/app/service/tiposuscripcion.service';

//import * as moment from 'moment';

@Component({
  selector: 'app-subscripcioncreaedita',
  templateUrl: './subscripcioncreaedita.component.html',
  styleUrls: ['./subscripcioncreaedita.component.css']
})
export class SubscripcioncreaeditaComponent implements OnInit {
  subscripcion: subscripcion = new subscripcion();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  listatiposuscripcion: tiposuscripcion[] = [];
  idtiposuscripcionselec: number = 0;
  mensaje1: string = "";
  constructor(private SubscripcionService:SubscripcionService,private route:ActivatedRoute,
  private router: Router, private TiposuscripcionService: TiposuscripcionService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] !=null;
      this.init();
    });
    this.TiposuscripcionService.listar().subscribe(data => { this.listatiposuscripcion = data });
  }
  aceptar(): void {
    if (this.subscripcion.idsuscripcion > 0 ) {
      let p = new tiposuscripcion();
      p.idtiposuscripcion = this.idtiposuscripcionselec; //Aqui se toma como referencia el id de tipo de suscricpion
      this.subscripcion.tiposuscripcion = p;
      
      if  (this.edicion){
      this.SubscripcionService.modificar(this.subscripcion).subscribe(data => {
        this.SubscripcionService.listar().subscribe(data => {
          this.SubscripcionService.setLista(data);
        });
      })
    }
    else {
      this.SubscripcionService.insertar(this.subscripcion).subscribe(data =>{
        this.SubscripcionService.listar().subscribe(data => {
          this.SubscripcionService.setLista(data);
        });
      }, err => {
        //this.mensaje=err
        console.log(err);
      })
    }
      this.router.navigate(['suscripcion']); //router
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.SubscripcionService.Listarid(this.id).subscribe(data => {
        this.subscripcion = data
        console.log(data);
        this.idtiposuscripcionselec = data.tiposuscripcion.idtiposuscripcion;
      })
    }
  }
}
