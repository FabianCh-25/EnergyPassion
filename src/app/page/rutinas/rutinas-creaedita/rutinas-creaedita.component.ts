import { Trainer } from './../../../module/trainer';
import { RutinasService } from './../../../service/rutinas.service';
import { RutinasService } from 'src/app/service/rutinas.service';
import { rutinas } from './../../../module/rutinas';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Trainer } from 'src/app/module/trainer';
import { TrainerService } from 'src/app/service/trainer.service';


@Component({
  selector: 'app-rutinas-creaedita',
  templateUrl: './rutinas-creaedita.component.html',
  styleUrls: ['./rutinas-creaedita.component.css']
})
export class RutinasCreaeditaComponent implements OnInit {

  rutinas:rutinas = new rutinas();
  id: number=0;
  edicion: boolean = false;
  listaTrainer: Trainer[] = [];
  idTrainerSeleccionado: number = 0;
  mensaje: string ="";
  
  

  constructor(private rutinasService:RutinasService ,private router: Router, private route:ActivatedRoute, private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id= data['id'];
      this.edicion = data['id'] != null;
      this.init();

});


  }
  aceptar():void{

    if (this.rutinas.id > 0 && this.idTrainerSeleccionado > 0 && this.rutinas.Tren_superior.length > 0 && this.rutinas.Tren_inferior.length > 0 && this.rutinas.Tiempo > 0) {
      let p = new Trainer();
      p.id = this.idTrainerSeleccionado;
      this.rutinas.trainer = p;
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
        });
      }, err =>{
        console.log(err);
      });
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
        console.log(data);
        this.idTrainerSeleccionado = data.trainer.id;
      });
    }
  }

}
