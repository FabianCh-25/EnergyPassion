import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscripcion',
  templateUrl: './subscripcion.component.html',
  styleUrls: ['./subscripcion.component.css']
})
export class SubscripcionComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
