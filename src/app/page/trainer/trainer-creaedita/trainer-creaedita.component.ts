import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { TrainerService } from './../../../service/trainer.service';
import { Trainer } from 'src/app/module/trainer';

@Component({
  selector: 'app-trainer-creaedita',
  templateUrl: './trainer-creaedita.component.html',
  styleUrls: ['./trainer-creaedita.component.css']
})
export class TrainerCreaeditaComponent implements OnInit {
  trainer: Trainer = new Trainer();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  constructor(private trainerService: TrainerService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] !=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.trainer.id > 0 && this.trainer.name.length>0 && this.trainer.idCalificacion >0) {
      if  (this.edicion){
      this.trainerService.modificar(this.trainer).subscribe(data => {
        this.trainerService.listar().subscribe(data => {
          this.trainerService.setLista(data);
        })
      })
    }
    else {
      this.trainerService.insertar(this.trainer).subscribe(data =>{
        this.trainerService.listar().subscribe(data => {
          this.trainerService.setLista(data);
        })
      })
    }
      this.router.navigate(['trainer']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.trainerService.Listarid(this.id).subscribe(data => {
        this.trainer = data;
      })
    }
  }
}
