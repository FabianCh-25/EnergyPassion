import { Component, OnInit } from '@angular/core';
import { CalificacionService} from 'src/app/service/calificacion.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calificaciondelete',
  templateUrl: './calificaciondelete.component.html',
  styleUrls: ['./calificaciondelete.component.css']
})
export class CalificaciondeleteComponent implements OnInit {

  constructor(private calificacionS:CalificacionService,private dialogRef:MatDialogRef<CalificaciondeleteComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean){
    this.calificacionS.setConfirmarEliminacon(estado);
    this.dialogRef.close();
  }
}
