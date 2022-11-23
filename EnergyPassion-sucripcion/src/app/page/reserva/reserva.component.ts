import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(public route:ActivatedRoute){
    
  }
  ngOnInit(): void {}
}
