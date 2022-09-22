import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-subscripcion',
  templateUrl: './tipo-subscripcion.component.html',
  styleUrls: ['./tipo-subscripcion.component.css']
})
export class TipoSubscripcionComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
