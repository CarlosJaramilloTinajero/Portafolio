import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Output() mostrarNavbar: EventEmitter<boolean> = new EventEmitter();
  @Output() selectdContact: EventEmitter<number> = new EventEmitter();
  @Output() mostrarPuntosYPuntero: EventEmitter<boolean> = new EventEmitter();
  @Output() mostrarCursor: EventEmitter<boolean> = new EventEmitter();

  contador: number = 0;

  textoShadow: number = 0;

  mostrarContact: boolean = false;

  texto: string = "Hola, yo soy Carlos Jarmillo-Tecnologo en Desarrollo de Software-con habilidades en el dearrollo web que me gustaria explotar-Soy un persona muy autodidacta capaz de resolver problemas de una manera eficaz-Tengo diversos conocimientos en programacion web que van desde el diseño web a HTML, CSS, TypeScript, JavaScript, PHP-como tambien conocimientos en diferentes FrameWorks de Bakcend como de Frontend";


  textoArray: string[] = this.texto.split("");
  constructor() { }

  ngOnInit(): void {

    let idInterval = setInterval(() => {
      if (this.contador < this.textoArray.length) {
        this.contador++;
      } else {
        this.textoShadow = 2;
        var idTimeOut1 = setTimeout(() => {
          this.textoShadow = 1;
          window.clearTimeout(idTimeOut1);
        }, 1500);

        var idTimeOut2 = setTimeout(() => {
          this.mostrarPuntosYPuntero.emit(true);
          this.mostrarCursor.emit(true);
          window.clearTimeout(idTimeOut2);
        }, 3500);

        this.mostrarContact = true;
        this.mostrarNavbar.emit(true);
        window.clearInterval(idInterval);
      }
    }, 28);
  }

  contact() {
    this.selectdContact.emit(3);
  }

}
