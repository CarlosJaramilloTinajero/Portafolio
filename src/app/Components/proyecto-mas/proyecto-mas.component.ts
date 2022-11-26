import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proyecto-mas',
  templateUrl: './proyecto-mas.component.html',
  styleUrls: ['./proyecto-mas.component.css']
})
export class ProyectoMasComponent implements OnInit {

  letras: string[] = [];
  @Input() descripcionProyecto: string = "";
  @Input() lenguajes: string[] = [];
  // @Input() descripcionTecnica: string = "";
  @Input() link: string = "";
  @Input() img: string = "";
  @Input() nombreProyecto: string = "";
  @Input() descripcionBreve: string = "";
  @Input() linkGithub: string = "";

  @Output() regresarEvent: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  regresar() {
    this.regresarEvent.emit(0);
  }

  ngOnInit(): void {
    this.letras = this.descripcionProyecto.split("");
  }


}
