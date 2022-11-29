import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio1.0';
  selected: number = 0;
  selectedAnt: number = 0;
  esconder: number = 0;
  mostrarNavbar: boolean = false;
  cambioCom: boolean = false;

  animacionesHabiitar: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    const lado = 50;

    let puntero = document.getElementById('puntero') ?? document.createElement('textarea');
    puntero.style.width = lado + "px";
    puntero.style.height = lado + "px";
    puntero.style.borderRadius = (lado / 2) + "px";
    let pyPuntero = 0, pxPuntero = 0;

    let pxRaton = 0, pyRaton = 0;
    let mover: boolean = false;


    window.addEventListener('mousemove', (e) => {
      pxRaton = (e.pageX - (lado / 2) + 6);
      pyRaton = (e.pageY - (lado / 2) + 6);
      // puntero.style.left = pxRaton + "px";
      // puntero.style.top = pyRaton + "px";
      mover = true;
    })

    setInterval(() => {
      if (this.mostrarNavbar && mover) {

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

      if (mover) {
        if (Math.round(pxRaton) == Math.round(pxPuntero) && Math.round(pyRaton) == Math.round(pyPuntero)) {
          mover = false;
        }
      }
    }, 7);

  }

  getRandom(max: number){
    return Math.floor(Math.random() * max);
  }

  // Helpers
  getVelocidad(distancia: number) {
    // var max = 8;
    // if (distancia / 50 > max) return max;
    return (distancia / 50);
  }

  cambiarContenido(num: number) {
    window.scroll(0, 0);
    this.selected = num;
    setTimeout(() => {
      this.esconder = this.selected;
    }, 1250);

    if (num == 1) {
      setTimeout(() => {
        this.animacionesHabiitar = true;
      }, 4500);
    } else {
      this.animacionesHabiitar = false;
    }

  }
}


        // if (pxRaton > pxPuntero && pyRaton > pyPuntero) {
        //   resta1 = pxRaton - pxPuntero;
        //   resta2 = pyRaton - pyPuntero;
        //   hipotenusa = this.hipotenusa((resta1), (resta2));
        //   pyPuntero += (this.reglaDeTesPorcentaje((resta2), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        //   pxPuntero += (this.reglaDeTesPorcentaje((resta1), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        // }

        // if (pxRaton < pxPuntero && pyRaton < pyPuntero) {
        //   resta1 = pxPuntero - pxRaton;
        //   resta2 = pyPuntero - pyRaton;
        //   hipotenusa = this.hipotenusa((resta1), (resta2));
        //   pyPuntero -= (this.reglaDeTesPorcentaje((resta2), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        //   pxPuntero -= (this.reglaDeTesPorcentaje((resta1), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        // }

        // if (pxRaton < pxPuntero && pyRaton > pyPuntero) {
        //   resta1 = pxPuntero - pxRaton;
        //   resta2 = pyRaton - pyPuntero;
        //   hipotenusa = this.hipotenusa((resta1), (resta2));
        //   pyPuntero += (this.reglaDeTesPorcentaje((resta2), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        //   pxPuntero -= (this.reglaDeTesPorcentaje((resta1), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        // }

        // if (pxRaton > pxPuntero && pyRaton < pyPuntero) {
        //   resta1 = pxRaton - pxPuntero;
        //   resta2 = pyPuntero - pyRaton;
        //   hipotenusa = this.hipotenusa((resta1), (resta2));
        //   pyPuntero -= (this.reglaDeTesPorcentaje((resta2), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        //   pxPuntero += (this.reglaDeTesPorcentaje((resta1), 100, hipotenusa) * (this.getVelocidad(hipotenusa)));
        // }

        
  // hipotenusa(ladoA: number, ladoB: number) {
  //   return Math.sqrt((ladoA * ladoA) + (ladoB * ladoB));
  // }


  // reglaDeTesPorcentaje(num: number, num2: number, num3: number) {
  //   return ((num * num2) / num3) / 100;
  // }