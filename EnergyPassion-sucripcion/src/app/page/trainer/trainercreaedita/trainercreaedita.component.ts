import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { TrainerService } from './../../../service/trainer.service';
import { Trainer } from 'src/app/module/trainer';
import { Calificacion } from 'src/app/module/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { RutinasService } from 'src/app/service/rutinas.service';
import { rutinas } from 'src/app/module/rutinas';
//AGREGAR COMPONENTES
@Component({
  selector: 'app-trainercreaedita',
  templateUrl: './trainercreaedita.component.html',
  styleUrls: ['./trainercreaedita.component.css']
})
export class TrainercreaeditaComponent implements OnInit {
  trainer: Trainer = new Trainer();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;
  listacalficacion: Calificacion[] = [];
  idcalificacionselec: number = 0;
  listarutina: rutinas[] = [];
  idrutinaselec: number = 0;
  constructor(private trainerService: TrainerService,private route:ActivatedRoute,
    private router: Router, private CalificacionService: CalificacionService,private RutinasService: RutinasService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params) => {
      this.id = data['id'];
      this.edicion = data['id'] !=null;
      this.init();
    });
    this.CalificacionService.listar().subscribe(data => { this.listacalficacion = data });
    this.RutinasService.listar().subscribe(data => { this.listarutina = data });
  }
  aceptar(): void {
    if (this.trainer.idtrainer > 0) {
      let c = new Calificacion();
      c.idcalificacion = this.idcalificacionselec;
      let r = new rutinas();
      r.idrutinas = this.idrutinaselec;
      this.trainer.calificacion = c;
      this.trainer.rutinas = r;
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
        });
      },err => {
        //this.mensaje=err
        console.log(err);
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
        console.log(data);
        this.idcalificacionselec = data.calificacion.idcalificacion;
        this.idrutinaselec = data.rutinas.idrutinas;
      })
    }
  }
}
