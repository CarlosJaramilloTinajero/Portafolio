import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/Models/mensaje';
import { MensajeService } from 'src/app/Services/mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes: Mensaje[] = [];
  mensajeModal: Mensaje = new Mensaje();
  @Input() select: number = 0;
  @Input() retraso: number = 0;
  constructor(private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.getMensajes();
  }

  getMensajes() {
    this.mensajeService.getMensajes().subscribe(
      data => {
        this.mensajes = data;
      },
      error => {
        this.mensajeModal.contacto = "carlitux94@gmail.com";
        this.mensajeModal.dia = "17/Dic/2022";
        this.mensajeModal.hora = "18:13";
        this.mensajeModal.id = 0;
        this.mensajeModal.mensaje = "Hola aqui te dejo mi contacto para que te puedas comunicar con migo, espero la resouesta.";
      });
  }

  deleteMensaje(mensajeId: number) {
    this.mensajeService.deleteMensaje(mensajeId).subscribe(
      data => {
        this.getMensajes();
      },
      error => {

      });
  }

}
