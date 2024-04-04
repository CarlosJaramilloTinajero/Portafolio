import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  @Input() select: number = 0;
  @Input() retraso: number = 0;
  @Input() iluminacion: boolean = false;

  // Textos
  tecnologyTitle: string[] = ['Laravel', 'Vue', 'PHP', 'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Angular', 'React'];

  tecnologyText: any = [
    ("Mi destreza en Laravel se extiende a Livewire, CRON para comandos programados, gestión de Jobs, creación/consumo de API Rest, manipulación de Emails, Excel para exportar/importar datos, y aprovechamiento de Websockets (Pusher y Laravel Echo), entre otros.").split(""),
    ("Mi experiencia en el Framework de JavaScript Vue incluye habilidades en Vuelidate para validación, Vuex para la gestión de estados, Vue Router para enrutamiento, y la capacidad de consumir APIs Rest para integraciones dinámicas y eficientes, entro otros.").split(""),
    ('Mis habilidades en el lenguaje de programación PHP abarcan una amplia gama de áreas, desde el manejo de bases de datos MySQL, creación de aplicaciones web dinámicas hasta la implementación de seguridad robusta y optimización de rendimiento, entre otros').split(""),
    ('Mis habilidades en el lenguaje de programación JavaScript abarcan la creación de aplicaciones web interactivas y dinámicas, el desarrollo de funciones y componentes frontend, manipulación del DOM, gestión de eventos, uso de APIs y Frameworks como Vue o Angular.').split(""),
    ('En el ámbito del lenguaje de estilos CSS, mis habilidades se extienden a la creación de diseños responsivos, estilización de páginas web, manejo avanzado de selectores, animaciones, posicionamiento y uso de frameworks como Bootstrap o Tailwind para agilizar el desarrollo.').split(""),
    ('En mi trayectoria con HTML, me destaco en la creación de estructuras web semánticas, la utilización meticulosa de etiquetas, la elaboración de elementos multimedia y la aplicación rigurosa de estándares de accesibilidad para diseñar interfaces eficientes y accesibles.').split(""),
    ('Mi habilidad en TypeScript se manifiesta en la creación de aplicaciones sólidas con tipado estático. Implemento interfaces, clases, módulos y optimizo el desarrollo en entornos complejos de programación para garantizar sistemas eficientes y escalables, entre otros.').split(""),
    // ('En SQL, demuestro habilidades en la creación y gestión eficiente de bases de datos, escritura de consultas complejas, diseño de esquemas, optimización de consultas y manejo seguro de datos para sistemas eficaces y confiables.').split(""),
    ('En Angular, destaco por mi habilidad en la construcción de aplicaciones web dinámicas y escalables. Manejo la creación de componentes, servicios, enrutamiento, gestión de estado con RxJS y optimización de rendimiento para interfaces robustas y eficientes, entre otros.').split(""),
    ('').split("")
  ];

  tecnologyImg: any = [
    {
      name: 'Vue',
      percentage: 90,
      img: 'assets/vue-icon.png'
    },
    {
      name: 'React',
      percentage: 60,
      img: 'assets/react-icon.png'
    },
    {
      name: 'Angular',
      percentage: 60,
      img: 'assets/angular-icon.png'
    },
    {
      name: 'Laravel',
      percentage: 90,
      img: 'assets/laravel-icon.png'
    },
    {
      name: 'PHP',
      percentage: 90,
      img: 'assets/php-icon.png'
    },
    {
      name: 'SQL',
      percentage: 75,
      img: 'assets/sql-icon.png'
    },
    {
      name: 'JavaScript',
      percentage: 95,
      img: 'assets/javascript-icon.svg'
    },
    {
      name: 'HTML',
      percentage: 95,
      img: 'assets/html-icon.png'
    },
    {
      name: 'CSS',
      percentage: 95,
      img: 'assets/css-icon.webp'
    }
  ];

  idInterval: any = 0;
  showNumberWord: number = 0;
  text: string = '';

  constructor() { }

  ngOnInit(): void {
    this.tecnologyImg = this.tecnologyImg.sort((a: any, b: any) => b.percentage - a.percentage);
  }

  hiddeText() {
    if (this.idInterval !== 0) {
      window.clearInterval(this.idInterval);
    }

    this.showNumberWord = 0;
    this.text = '';
  }

  showText(length: number, type: string) {
    if (this.text === type) {
      return;
    }

    this.hiddeText();

    this.text = type;
    let i: number = 0;
    this.idInterval = window.setInterval(() => {
      if (i >= length) {
        window.clearInterval(this.idInterval);
        this.idInterval = 0;
      } else {
        this.showNumberWord++;
        i++;
      }
    }, 30);
  }
}
