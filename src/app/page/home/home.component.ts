import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  //this.route.navigate
  }
  navegar(url: string){
    this.route.navigate([url]);

  }

}
