import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/service/trainer.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector:'app-trainer-dialogo',
    templateUrl: './trainer-dialogo.component.html',
    styleUrls: ['./trainer-dialogo.component.css']
})
export class TrainerDialogoComponent implements OnInit{

    constructor(private TrainerService: TrainerService,
        private dialogRef: MatDialogRef<TrainerDialogoComponent>
        ){  }
    
    ngOnInit(): void {  }

    confirmar(estado: boolean){
        this.TrainerService.setConfirmaEliminacion(estado);
        this.dialogRef.close();
    }

}