import { RutinasService } from 'src/app/service/rutinas.service';
import { rutinas } from './../../../module/rutinas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-rutinas-creaedita',
  templateUrl: './rutinas-creaedita.component.html',
  styleUrls: ['./rutinas-creaedita.component.css']
})
export class RutinasCreaeditaComponent implements OnInit {

  rutinas:rutinas = new rutinas();
  mensaje: string ="";
  edicion: boolean = false;
  id: number=0;

  constructor(private rutinasService:RutinasService ,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id= data['id'];
      this.edicion = data['id'] != null;
      this.init();

});


  }
  aceptar():void{

    if (this.rutinas.idrutinas   > 0 ) {
      if(this.edicion){
        this.rutinasService.modificar(this.rutinas).subscribe(data=>{
          this.rutinasService.listar().subscribe(data=>{
            this.rutinasService.setLista(data);
          })
        })
      }else{
      this.rutinasService.insertar(this.rutinas).subscribe(data => {
        this.rutinasService.listar().subscribe(data => {
          this.rutinasService.setLista(data);
        })
      })
    }
      this.router.navigate(['rutinas']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }

  }

  init(){
    if(this.edicion){
      this.rutinasService.listarId(this.id).subscribe(data=> {
        this.rutinas = data;
      })
    }
  }

}
