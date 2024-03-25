import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopupService } from 'src/app/Services/popup.service';
import { APP_DEBUG } from 'src/app/constants';

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
  @Input() iliminacion: boolean = false;

  @Output() regresarEvent: EventEmitter<number> = new EventEmitter();

  constructor(private popUpService: PopupService) {
  }

  regresar() {
    this.regresarEvent.emit(0);
  }

  ngOnInit(): void {
    this.letras = this.descripcionProyecto.split("");
  }

  enterUrlProject(): void {
    if (APP_DEBUG) return;
    this.popUpService.typeSend('Click en el proyecto ' + this.nombreProyecto + ' del portafolio y se abrio el proyecto').subscribe(
      data => {
      }
    );
  }

  enterUrlProjectGit(): void {
    if (APP_DEBUG) return;
    this.popUpService.typeSend('Click en el proyecto ' + this.nombreProyecto + ' del portafolio y se abrio el repositorio').subscribe(
      data => {
      }
    );
  }

}
