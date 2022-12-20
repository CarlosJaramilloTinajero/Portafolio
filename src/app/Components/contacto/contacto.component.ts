import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mensaje } from 'src/app/Models/mensaje';
import { MensajeService } from 'src/app/Services/mensaje.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() select: number = 0;
  @Input() retraso: number = 0;
  @Input() iluminacion: boolean = false;

  @Output() verMensajes: EventEmitter<boolean> = new EventEmitter();

  msj: Mensaje = new Mensaje();
  copiado: number = 0;
  animacionEnviando: boolean = false;
  animacionEnviado: boolean = false;
  envioEstado: number = 0;

  focusInput: boolean = false;
  focusArea: boolean = false;
  constructor(private msjService: MensajeService) { }

  ngOnInit(): void {
  }

  copyText(val: string, num: number) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.copiado = num;
    var idTimeOut = setTimeout(() => {
      this.copiado = 0;
      window.clearTimeout(idTimeOut);
    }, 2000)
  }

  submitContacto(form: NgForm) {

    if (this.msj.mensaje == "ver mensajes") {
      this.verMensajes.emit(true);
    } else {
      const meses: string[] = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      if (this.envioEstado == 0) {
        this.animacionEnviando = true;
        var date: Date = new Date();

        var minutos = date.getMinutes();

        this.msj.dia = date.getDate().toString() + "/" + meses[date.getMonth()] + "/" + date.getFullYear().toString();
        if (minutos < 10) this.msj.hora = date.getHours().toString() + ":0" + minutos.toString();
        if (minutos >= 10) this.msj.hora = date.getHours().toString() + ":" + minutos.toString();

        var id = setTimeout(() => {
          this.msjService.addMensaje(this.msj).subscribe(
            data => {
              console.log(data);

              this.animacionEnviando = false;
              this.envioEstado = 1;
              this.animacionEnviado = true;
              this.msj = new Mensaje();
              form.reset();

              var id2 = setTimeout(() => {
                this.envioEstado = 0;
                this.animacionEnviado = false;
                window.clearTimeout(id2);
              }, 3000);

            },
            error => {
              console.log(error);
              this.animacionEnviando = false;
              this.envioEstado = 2;

              var id2 = setTimeout(() => {
                this.envioEstado = 0;
                window.clearTimeout(id2);
              }, 3000);

            });
          window.clearTimeout(id);
        }, 1500);
      }
    }
  }
}

