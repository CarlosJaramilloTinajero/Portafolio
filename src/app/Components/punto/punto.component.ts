import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.css']
})
export class PuntoComponent implements OnInit {

  @Input() num: number = 0;

  @Input() left: number = 0;
  @Input() top: number = 0;
  @Input() opacity: number = 0;


  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.left -= 1;
    // }, 100);
  }

}
