import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../../Services/popup.service';
import { APP_DEBUG } from 'src/app/constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() select: number = 0;
  @Input() retraso: number = 0;
  @Input() iluminacion: boolean = false;

  jobSelected: number = 0;

  jobs: any = [
    {
      title: 'Mervins',
      className: 'mervins',
      timeExperience: 'Ene 2023 - Jul 2023',
      positionExperience: 'Desarrollador Full Stack',
      jobSelect: 1,
      logo: 'assets/logo-mervins.webp',
      urlCompany: 'https://www.mervins.com.mx/',
      textExperience: ("Durante mi experiencia laboral en la empresa Mervins, tuve la oportunidad de desempeñarme como desarrollador full stack durante 7 meses. Durante este tiempo, participé en una variedad de proyectos, no solo para Mervins, sino también para otras empresas como Expercom y Powe.mx. En estos proyectos, desempeñé un papel tanto en el desarrollo del frontend como del backend, trabajando en la creación de nuevos módulos, integraciones con proveedores a través de APIs, mejoras en el diseño de los sitios web públicos y en los sistemas de administración, así como en la resolución de errores y brindando soporte a los proyectos. ** Para el desarrollo de estos proyectos, utilicé lenguajes como JavaScript, CSS y HTML en el frontend, y aproveché bibliotecas de estilos de CSS y JavaScript para mejorar los resultados visuales. En el backend, trabajé con PHP y SQL para las bases de datos, utilizando el framework Laravel. Hice uso de los componentes de Laravel, como el sistema de tareas programadas (Cron), para actualizar productos de forma automática mediante comandos programados. También utilicé los Jobs de Laravel para realizar tareas en segundo plano, utilizando un worker para procesar estas tareas. Además, implementé websockets utilizando la API de Pusher y Laravel Echo para recibir notificaciones en tiempo real sobre los resultados de los Jobs y tareas programadas del Cron de Laravel. También realicé conexiones a APIs de mayoristas mediante solicitudes HTTP para obtener datos de productos, como imágenes, nombres, precios e inventario. ** A través del trabajo realizado en Mervins, adquirí una amplia gama de conocimientos tanto en frontend como en backend. Aprendí más sobre las funcionalidades de Laravel, lo que me ha preparado para desarrollar y mejorar proyectos en el futuro. Mi experiencia en Mervins me ha brindado una base sólida y una valiosa experiencia laboral en el campo del desarrollo web.").split('')
    },
    {
      title: 'Maestros Joyeros',
      className: 'maestros-joyeros',
      timeExperience: 'May 2024 - Actualidad',
      positionExperience: 'Desarrollador Full Stack',
      jobSelect: 2,
      logo: 'assets/logo-mj.png',
      urlCompany: 'https://maestrosjoyeros.com/',
      textExperience: ('Durante mi experiencia en Maestros Joyeros, participé activamente en el desarrollo e implementación de módulos administrativos para diversas áreas, tales como Recursos Humanos, Soporte Técnico, Contabilidad, así como en la creación de sistemas internos personalizados que optimizaron procesos clave dentro de la empresa. ** Mi rol abarcó tanto el Frontend como el Backend, desempeñando funciones en todo el ciclo de vida de los proyectos. En el Frontend, utilicé tecnologías estándar como HTML5, CSS3 y JavaScript, implementando Tailwind CSS para un diseño rápido y eficiente, junto con Alpine.js y SweetAlert para enriquecer la experiencia de usuario con interfaces interactivas. ** En el Backend, desarrollé soluciones robustas utilizando PHP y el framework Laravel, que me permitieron estructurar aplicaciones escalables y modulares. También hice uso de Livewire, lo que facilitó la creación de componentes dinámicos y mejoró la interactividad sin necesidad de recargar la página. La gestión de datos se realizó mediante SQL, utilizando consultas optimizadas para garantizar un rendimiento eficiente en la base de datos. ** Además de la codificación, participé en la arquitectura del software, siguiendo buenas prácticas de desarrollo, como la aplicación del principio DRY (Dont Repeat Yourself), estructuración MVC (Model-View-Controller), y técnicas de control de versiones con Git, lo que facilitó la colaboración y mantenimiento a largo plazo. ** También me encargué de documentar los proyectos, generando manuales técnicos y funcionales para facilitar la transición y escalabilidad futura. Trabajé en la organización del equipo de desarrollo, implementando metodologías de trabajo como SCRUM, para asignar tareas, gestionar sprints y asegurar que los entregables se completaran dentro de los tiempos estimados. ** Durante mi tiempo en Maestros Joyeros, no solo perfeccioné habilidades técnicas sino que también adquirí competencias clave en gestión de proyectos, liderazgo de equipo y organización eficiente del flujo de trabajo, lo que contribuyó al éxito de los proyectos y a la mejora continua de los procesos internos de la empresa.').split('')
    }
  ];

  constructor(private popUpService: PopupService) { }

  ngOnInit(): void {
  }

  selectJob(select: number): void {
    this.jobSelected = select;
    window.scroll(0, 250);
  }

  return(): void {
    this.jobSelected = 0;
    window.scroll(0, 0);
  }

  clickVisitJob(company: string): void {
    if (APP_DEBUG) return;
    this.popUpService.typeSend('Entraron a la pagina de la empresa ' + company + ' desde el apartado de experiencia del portafolio').subscribe(
      data => {
      }
    )
  }

}
