import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio1.0';

  // Putero
  pyPuntero: number = 0;
  pxPuntero: number = 0;
  pxRaton: number = 0;
  pyRaton: number = 0;
  puntero: ElementCSSInlineStyle = document.createElement('textarea');
  // mover: boolean = false;
  tamanioPuntero: number = 50;
  velocidadPuntero: number = 20;
  // delayPuntero: number = 18;

  // Id's para limpiar los intervals
  idIntervalPuntos: number = 0;
  idIntervalCursor: number = 0;

  // Putos de fondo
  cantPuntosAnt: number = 7;
  cantPuntos: number = this.cantPuntosAnt;
  puntosArr: number[] = [];
  left: number[] = [];
  top: number[] = [];
  regresar: boolean[] = [];
  velocidad: number[] = [];
  opacity: number[] = [];
  mostrarPuntos: boolean = false;
  over: number = 0;
  gravedadPX: number = 100;
  delayMax: number = 27;
  delayPuntos: number = (this.delayMax - this.cantPuntos);

  // Cambio de contenido
  selected: number = 0;
  selectedAnt: number = 0;
  esconder: number = 0;
  cambioCom: boolean = false;
  retraso: number = 0;

  // Habilitar o deshabilitar 
  mostrarNavbar: boolean = false;
  mostrarCursor: boolean = false;
  animacionesHabiitar: boolean = false;
  animacionConfSVG: boolean = false;
  animacionInicioLetras: boolean = false;
  animacionInicio: boolean = true;
  iluminacionExtra: boolean = true;

  // Animacion carga inicio
  PuntoCargado: number = 0;
  PuntoCargado2: number = 0;
  PuntoCargado3: number = 0;
  puntosInicio: number[] = [];
  barrasInicio: number[] = [];
  cantBarras: number = 9;
  cantPuntosInicio: number = 4;
  todos: boolean = false;
  moverInicio: boolean = false;
  delayInicio: number = 1000;

  // Habilitar panel mensajes
  mensajesHabilitar: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    // Habilitar la opcion para ver mensajes
    window.onkeydown = (e) => {
      if (e.ctrlKey && e.code === 'KeyM') {
        this.mensajesHabilitar = !this.mensajesHabilitar;
        if (this.selected == 4) {
          this.cambiarContenido(0);
        }
      }
    };

    // Habilitar la animacion de carga de incio despues de un time out
    var id = setTimeout(() => {
      this.moverInicio = true;
      window.clearTimeout(id);
    }, this.delayInicio)

    this.AnimacionCarga();
  }

  // Aimacion de carga al incio
  AnimacionCarga() {
    for (let i = 0; i < this.cantBarras; i++) {
      this.barrasInicio[i] = 1;
    }

    for (let i = 0; i < this.cantPuntosInicio; i++) {
      this.puntosInicio[i] = 1;
    }

    this.PuntoCargado = this.getRandom(6) + 1;
    this.PuntoCargado2 = this.PuntoCargado - 1;
    this.PuntoCargado3 = this.PuntoCargado - 2;
    var cont = 0, vel = 100, maxMilSeg = 4500;

    var id = setInterval(() => {
      if (this.moverInicio) {
        this.PuntoCargado++;
        this.PuntoCargado2++;
        this.PuntoCargado3++;

        if (this.PuntoCargado >= this.cantBarras) {
          this.PuntoCargado = 0;
        }

        if (this.PuntoCargado2 >= this.cantBarras) {
          this.PuntoCargado2 = 0;
        }

        if (this.PuntoCargado3 >= this.cantBarras) {
          this.PuntoCargado3 = 0;
        }

        if (cont >= maxMilSeg) {
          var id2 = setTimeout(() => {
            this.animacionInicioLetras = true;
            window.clearTimeout(id2);
          }, 3500 + this.delayInicio);
          var id3 = setTimeout(() => {
            this.animacionInicio = false;
            window.clearTimeout(id3);
          }, 200);
          this.todos = true;
          window.clearInterval(id);
        }

        cont += vel;
      }
    }, vel);
  }

  // Quitar y poner cursor y puntos de fondo
  ponerCursor(): void {
    let funcion = () => {
      this.pxPuntero += this.getVelocidad(this.pxRaton - this.pxPuntero);
      this.pyPuntero += this.getVelocidad(this.pyRaton - this.pyPuntero);
      this.puntero.style.left = `${this.pxPuntero}px`;
      this.puntero.style.top = `${this.pyPuntero}px`;
      if (!this.mostrarCursor) {
        return;
      }
      requestAnimationFrame(funcion);
    };

    requestAnimationFrame(funcion);
  }

  ponerPuntos() {
    var conPuntos = 0;
    this.over = (document.documentElement.clientWidth * .1);
    var anchoPantalla = document.documentElement.clientWidth;


    var id = setInterval(() => {
      if (this.mostrarPuntos) {
        if (conPuntos <= this.puntosArr.length) {

          if (this.opacity[conPuntos] == 1) {
            if (this.getRandom(50) == 25) {
              this.opacity[conPuntos] = 0;
            }
          } else {
            if (this.getRandom(20) == 10) {
              this.opacity[conPuntos] = 1;
            }
          }


          if (this.left[conPuntos] < -this.over) {
            this.regresar[conPuntos] = true;
            this.velocidad[conPuntos] = (this.velocidad[conPuntos] * -1);
          }

          if (this.left[conPuntos] > anchoPantalla + this.over) {
            this.velocidad[conPuntos] = (this.velocidad[conPuntos] * -1);
            this.regresar[conPuntos] = false;
          }

          var punteroYArriba: boolean = ((this.pyRaton - this.top[conPuntos]) < (this.gravedadPX / 2) && (this.top[conPuntos] - this.pyRaton) < (this.gravedadPX / 2));
          var punteroArribaXY: boolean = ((this.pxRaton - this.left[conPuntos]) < this.gravedadPX && punteroYArriba && (this.left[conPuntos] - this.pxRaton) < this.gravedadPX && punteroYArriba);

          if (punteroArribaXY) {
            this.left[conPuntos] -= this.velocidad[conPuntos] * 3;
          } else { this.left[conPuntos] -= this.velocidad[conPuntos]; }

          conPuntos += 1;
        } else {
          conPuntos = 0;
        }
      }
    }, this.delayPuntos);

    this.idIntervalPuntos = parseInt(id.toString());

  }

  quitar_o_poner_cursorInterval() {
    if (this.mostrarCursor) {
      // window.clearInterval(this.idIntervalCursor);
      this.pxPuntero = 0;
      this.pyPuntero = 0;
      this.puntero.style.left = 0 + "px";
      this.puntero.style.top = 0 + "px";
      this.mostrarCursor = false;
    } else {
      this.mostrarCursor = true;
      this.ponerCursor();
    }

  }

  quitar_o_poner_puntosInterval() {
    if (this.mostrarPuntos) {
      window.clearInterval(this.idIntervalPuntos);
      this.mostrarPuntos = false;
      this.cantPuntos = 0;
      this.inicializarPuntos();
    } else {
      this.cantPuntos = this.cantPuntosAnt;
      this.delayPuntos = this.delayMax - this.cantPuntos;
      this.inicializarPuntos();
      this.mostrarPuntos = true;
      this.ponerPuntos();
    }
  }

  ponerCursorInicio(b: boolean) {
    if (document.documentElement.clientWidth >= 576) {
      this.inicializarCursor();
      var id = setTimeout(() => {
        this.mostrarCursor = b;
        this.ponerCursor();
        window.clearTimeout(id);
      }, 500);
    }
  }

  ponerPuntosIncio(b: boolean) {
    if (b) {
      if (document.documentElement.clientWidth >= 576) {
        // Inicializamos las variables de los puntos
        this.inicializarPuntos();

        // Interval y TimeOut para los puntos de fondo
        var idTimeOutPuntos = setTimeout(() => {
          this.ponerPuntos();
          this.mostrarPuntos = b;
          window.clearTimeout(idTimeOutPuntos);
        }, 2000);
      }
    }
  }

  ponerAnimacionSVGInicio(b: boolean) {
    this.animacionConfSVG = b;
    var id = setTimeout(() => {
      this.animacionConfSVG = false;
      window.clearTimeout(id);
    }, 1500);
  }

  // Helpers puntos de fondo y cursor
  cambiarCantidadDePuntos() {
    this.cantPuntos = this.cantPuntosAnt;
    this.delayPuntos = (this.delayMax - this.cantPuntos);
    if (this.mostrarPuntos) {
      window.clearInterval(this.idIntervalPuntos);
      this.mostrarPuntos = false;

      var idTimeOut = setTimeout(() => {
        this.inicializarPuntos();
        this.ponerPuntos();

        var idTimeOut2 = setTimeout(() => {
          this.mostrarPuntos = true;
          window.clearTimeout(idTimeOut2);
        }, 1000);

        window.clearTimeout(idTimeOut);
      }, 2000);
    }


  }

  inicializarPuntos() {
    this.puntosArr = [];
    this.left = [];
    this.top = [];
    this.regresar = [];
    this.velocidad = [];
    this.opacity = [];

    // Inicializacion de las variables top y lef de los puntos de fonde
    for (let k = 0; k < this.cantPuntos; k++) {
      this.puntosArr[k] = 1;
    }

    for (let i = 0; i < this.cantPuntos; i++) {
      this.left[i] = this.getRandom(document.documentElement.clientWidth - 10);
      this.top[i] = this.getRandom(document.documentElement.clientHeight - 110) + 55;
      this.velocidad[i] = this.getRandom(9) + 6;

      if (this.getRandom(2) + 1 == 1) {
        this.velocidad[i] = (this.velocidad[i] * -1);
      }
    }
  }

  inicializarCursor() {
    // Inicializacion del puntero del cursor
    this.puntero = document.getElementById('puntero') ?? document.createElement('textarea');
    this.puntero.style.width = this.tamanioPuntero + "px";
    this.puntero.style.height = this.tamanioPuntero + "px";
    this.puntero.style.borderRadius = (this.tamanioPuntero / 2) + "px";

    this.pxPuntero = 0;
    this.pyPuntero = 0;
    this.pxRaton = 0;
    this.pyRaton = 0;
    // Evento que modifica la posicion 'x' y 'y' del cursor en la ventana
    window.addEventListener('mousemove', (e) => {
      if (this.mostrarCursor || this.mostrarPuntos) {
        this.pxRaton = (e.pageX - (this.tamanioPuntero / 2) + 6);
        this.pyRaton = (e.pageY - (this.tamanioPuntero / 2) + 6);
        // this.mover = true;
      }
    })
  }

  // Helpers
  getVelocidad(distancia: number) {
    return (distancia / this.velocidadPuntero);
  }

  mostrarNavbarEvt(b: boolean) {
    this.mostrarNavbar = b;

    var elmSVG = document.getElementById('configSVG') ?? document.createElement('a');
    elmSVG.style.opacity = '1';
    var elm = document.getElementById('navBar') ?? document.createElement('a');
    elm.style.opacity = '1';
  }

  getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  cambiarContenido(num: number) {
    window.scroll(0, 0);
    this.retraso = this.selected;

    this.selected = num;

    var idTimeOutContenido = setTimeout(() => {
      this.esconder = this.selected;
      window.clearTimeout(idTimeOutContenido);
    }, 1250);

    var idTimeOutContenido3 = setTimeout(() => {
      this.retraso = -1;
      window.clearTimeout(idTimeOutContenido3);
    }, 3000);

    if (num == 1) {
      var idTimeOutContenido2 = setTimeout(() => {
        this.animacionesHabiitar = true;
        window.clearTimeout(idTimeOutContenido2);
      }, 4500);
    } else {
      this.animacionesHabiitar = false;
    }

  }

  cambiarIluminacion() {
    this.iluminacionExtra = !this.iluminacionExtra;
  }
}