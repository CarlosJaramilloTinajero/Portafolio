import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  idIntervalPuntos: number = 0;
  idIntervalCursor: number = 0;

  cantPuntos: number = 7;
  puntosArr: number[] = [];
  left: number[] = [];
  top: number[] = [];
  opacity: number[] = [];
  mostrarPuntos: boolean = false;

  title = 'portafolio1.0';
  selected: number = 0;
  selectedAnt: number = 0;
  esconder: number = 0;
  mostrarNavbar: boolean = false;
  cambioCom: boolean = false;
  mostrarCursor: boolean = false;

  animacionesHabiitar: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

    // Inicializacion de las variables top y lef de los puntos de fonde
    for (let k = 0; k < this.cantPuntos; k++) {
      this.puntosArr[k] = 1;
    }
    var idTimeOut1 = setTimeout(() => {
      for (let i = 0; i < this.cantPuntos; i++) {
        this.left[i] = this.getRandom(document.documentElement.clientWidth - 10);
        this.top[i] = this.getRandom(document.documentElement.clientHeight - 55) + 55;
      }
      window.clearTimeout(idTimeOut1);
    }, 2000);

    // Interval y TimeOut para los puntos de fondo
    var idTimeOutPuntos = setTimeout(() => {
      this.ponerPuntos();
      // console.log(idTimeOutPuntos);
      window.clearTimeout(idTimeOutPuntos);
    }, 15000);

    this.ponerCursor();


  }

  ponerCursor() {
    // Inicializacion del puntero del cursor
    const lado = 50;
    let puntero = document.getElementById('puntero') ?? document.createElement('textarea');
    puntero.style.width = lado + "px";
    puntero.style.height = lado + "px";
    puntero.style.borderRadius = (lado / 2) + "px";
    let pyPuntero = 0, pxPuntero = 0;

    let pxRaton = 0, pyRaton = 0;
    let mover: boolean = false;

    // Evento que modifica la posicion 'x' y 'y' del cursor en la ventana
    window.addEventListener('mousemove', (e) => {
      pxRaton = (e.pageX - (lado / 2) + 6);
      pyRaton = (e.pageY - (lado / 2) + 6);
      mover = true;
    })

    // SetInterval para mover el cursor hacia el cursor
    var id = setInterval(() => {
      if (this.mostrarCursor && mover) {

        if (pxRaton > pxPuntero) {
          pxPuntero += this.getVelocidad((pxRaton - pxPuntero));
        }

        if (pyRaton > pyPuntero) {
          pyPuntero += this.getVelocidad((pyRaton - pyPuntero));
        }

        if (pxRaton < pxPuntero) {
          pxPuntero -= this.getVelocidad((pxPuntero - pxRaton));
        }

        if (pyRaton < pyPuntero) {
          pyPuntero -= this.getVelocidad((pyPuntero - pyRaton));
        }

        puntero.style.top = pyPuntero + "px";
        puntero.style.left = pxPuntero + "px";

      }

      if (mover && this.mostrarCursor) {
        if (Math.round(pxRaton) == Math.round(pxPuntero) && Math.round(pyRaton) == Math.round(pyPuntero)) {
          mover = false;
        }
      }

    // console.log(this.idIntervalCursor);
    }, 7);

    this.idIntervalCursor = parseInt(id.toString());
    // console.log(this.idIntervalCursor);
  }

  quitar_o_poner_cursorInterval() {
    if (this.mostrarCursor) {
      window.clearInterval(this.idIntervalCursor);
      this.mostrarCursor = false;
    } else {
      this.mostrarCursor = true;
      this.ponerCursor();
    }

  }

  ponerPuntos() {
    var conPuntos = 0;

   var id = setInterval(() => {
      if (this.mostrarPuntos) {
        if (conPuntos <= this.puntosArr.length) {

          if (this.getRandom(15) == 5) {
            if (this.opacity[conPuntos] == 1) {
              this.opacity[conPuntos] = 0;
            } else {
              this.opacity[conPuntos] = 1;
            }
          }

          if (this.left[conPuntos] < -30) {
            this.left[conPuntos] = document.documentElement.clientWidth + 80;
          } else {
            this.left[conPuntos] -= 10;
          }
          conPuntos += 1;
        } else {
          conPuntos = 0;
        }
      }
    }, 20);

    this.idIntervalPuntos = parseInt(id.toString());

  }

  quitar_o_poner_puntosInterval() {
    if (this.mostrarPuntos) {
      window.clearInterval(this.idIntervalPuntos);
      this.mostrarPuntos = false;
    } else {
      this.mostrarPuntos = true;
      this.ponerPuntos();
    }

  }

  // Helpers
  getVelocidad(distancia: number) {
    return (distancia / 50);
  }

  getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  cambiarContenido(num: number) {
    window.scroll(0, 0);
    this.selected = num;
    var idTimeOutContenido = setTimeout(() => {
      this.esconder = this.selected;
      window.clearTimeout(idTimeOutContenido);
    }, 1250);

    if (num == 1) {
      var idTimeOutContenido2 = setTimeout(() => {
        this.animacionesHabiitar = true;
        window.clearTimeout(idTimeOutContenido2);
      }, 4500);
    } else {
      this.animacionesHabiitar = false;
    }

  }
}