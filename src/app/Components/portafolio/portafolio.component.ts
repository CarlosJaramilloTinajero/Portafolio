import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  @Input() esconder: number = 0;
  @Input() animaciones: boolean = false;
  proyectoSelect: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  verProyecto(num: number) {
    window.scroll(0, 180);
    this.proyectoSelect = num;

  }

}
