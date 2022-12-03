import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.css']
})
export class PuntoComponent implements OnInit {

  @Input() cantPuntitos: number = 0;

  cantPuntitosArr: number[] = [];

  @Input() num: number = 0;

  @Input() left: number = 0;
  @Input() top: number = 0;
  @Input() opacity: number = 0;

  leftPuntitos: number[] = [];
  topPuntitos: number[] = [];

  velocidadGiro: number[] = [];

  constructor() {
  }

  ngOnInit(): void {

    for (let i = 0; i < this.cantPuntitos; i++) {
      this.cantPuntitosArr[i] = 1;
      this.velocidadGiro[i] = this.getRandom(7) + 8;
    }
  }

  getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }
}
