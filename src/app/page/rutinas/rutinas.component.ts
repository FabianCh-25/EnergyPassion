import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // de no aparecer lo agregas

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
