import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = "https://www.nicepng.com/png/detail/122-1220710_mostly-cloudy-icon-png-clima-actual-buenos-aires.png";

  constructor() { }

  ngOnInit(): void {
  }

}
