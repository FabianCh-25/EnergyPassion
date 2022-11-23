import { Component,OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // de no aparecer lo agregas


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public route:ActivatedRoute) { } // se agrega

  ngOnInit(): void {
  }

}
