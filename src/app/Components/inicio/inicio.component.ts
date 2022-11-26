import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Output() mostrarNavbar: EventEmitter<boolean> = new EventEmitter();
  @Output() selectdContact: EventEmitter<number> = new EventEmitter();

  // @Input() esconder: number = 0;
  contador: number = 0;

  textoShadow: number = 0;

  mostrarContact: boolean = false;

  texto: string = "Hola, yo soy Carlos Jarmillo-Tecnologo en Desarrollo de Software-con habilidades en el dearrollo web que me gustaria explotar-Soy un persona muy autodidacta capaz de resolver problemas de una manera eficaz-Tengo diversos conocimientos en programacion web que van desde el diseño web a HTML, CSS, TypeScript, JavaScript, PHP-como tambien conocimientos en diferentes FrameWorks de Bakcend como de Frontend";

  // textoSplite: string[] = this.texto.split("-");

  textoArray: string[] = this.texto.split("");
  constructor() { }

  ngOnInit(): void {
    // this.textoArray = this.texto.split("");
    // console.log(this.textoSplite)

    let idInterval = setInterval(() => {
      if (this.contador < this.textoArray.length) {
        this.contador++;
      } else {
        this.textoShadow = 2;
        setTimeout(() => {
          this.textoShadow = 1;
        },1500);
        this.mostrarContact = true;
        this.mostrarNavbar.emit(true);
        window.clearInterval(idInterval);
      }
      // console.log("jsjnsjsdj")

    }, 28);

    // window.scrollBy(0, window.innerHeight);
    // }
  }

  contact() {
    this.selectdContact.emit(3);
  }

}
