import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tiposuscripcion',
  templateUrl: './tiposuscripcion.component.html',
  styleUrls: ['./tiposuscripcion.component.css']
})
export class TiposuscripcionComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
