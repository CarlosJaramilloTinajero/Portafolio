import { Component, OnInit, Input } from '@angular/core';
import { PopupService } from 'src/app/Services/popup.service';
import { APP_DEBUG } from 'src/app/constants';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  @Input() esconder: number = 0;
  @Input() animaciones: boolean = false;

  @Input() select: number = 0;
  @Input() retraso: number = 0;
  @Input() iliminacion: boolean = false;

  filter: String = '';

  projects: any = [
    {
      title: 'EXPERCOM ECOMMERCE LARAVEL',
      img: 'assets/Expercom.png',
      showNumber: 6,
      link: 'https://www.expercom.mx/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'API', 'SQL', 'Laravel'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript'], ['PHP', 'API', 'SQL'], ['Laravel']],
      moreProject: {
        name: 'Expercom Ecomerce',
        shortDescription: 'Desarrollo del Ecomerce para la empresa Expercom.',
        description: 'Integración de APIs de Mayoristas: Implementé conexiones a diversas APIs de mayoristas, como Exel, CtOnline, PCH, TVC, CVA, Intcomex y DC Mayorista; Utilicé los componentes de Laravel para consumir estas APIs de manera eficiente y obtener datos actualizados de los catálogos de productos, precios y disponibilidad; Mediante comandos y tareas programadas utilizando el Kernel de comandos y el sistema de cron de Laravel, automatizé la obtención de datos y la creación de órdenes en Expercom. Desarrollo de Módulos Avanzados: Desarrolle módulos personalizados tanto en el backend del administrador del sitio como en la interfaz pública de Expercom; Utilicé componentes del framework Livewire de Laravel en algunos modulos para crear interacciones dinámicas y en tiempo real, mejorando la experiencia del usuario y aumentando la eficiencia en la manipulación y visualización de datos. Mejoras en el Frontend: Realicé mejoras en el frontend tanto del administrador del sitio como en la interfaz pública de Expercom; Esto incluyó la creación de nuevos diseños y mejoras en los existentes utilizando CSS y JavaScript, con el objetivo de mejorar la apariencia y experiencia de usuario de la página. Desarrollo de la mayor parte de la Lógica del Ecommerce: Construí la mayor parte de la lógica del Ecommerce de Expercom utilizando las estructuras y funcionalidades proporcionadas por Laravel; Esto incluyó el desarrollo de un sistema de gestión de productos para administrar y mostrar los catálogos de productos, el diseño e implementación de un carrito de compras con capacidad de gestión de inventario, la implementación de un sistema de autenticación y registro de usuarios, y la creación de un panel de administración completo para que los propietarios y administradores gestionen pedidos, productos, clientes y otras configuraciones relevantes. Estas tareas muestran mi capacidad para trabajar con APIs externas, desarrollar módulos personalizados, mejorar el frontend de una aplicación y crear la lógica completa de un Ecommerce; Estoy orgulloso de mi contribución al proyecto Expercom y considero que estas habilidades serán valiosas en futuros proyectos.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Livewire', 'Consumo de APIs', 'MYSQL', 'Laravel', 'Tareas Cron'],
      }
    },
    {
      title: 'PELICULAS DE CHILL LARAVEL',
      img: 'assets/Proyecto_Peliculas.png',
      showNumber: 2,
      link: 'https://peliculas.carlosjaramillo.beauty/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/PeliculasLaravel',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'API', 'SQL', 'Laravel'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript'], ['PHP', 'API', 'SQL'], ['Laravel']],
      moreProject: {
        name: 'Sitio de peliculas',
        shortDescription: 'Este proyecto simula el comportamiento de un sitio de peliculas el cual cuenta con un catalogo de peliculas.',
        description: 'Este proyecto desarrollado en Laravel es una aplicación web para ver un catálogo de películas organizadas por categorías; Además, cuenta con un sistema de autenticación de usuarios los cuales pueden crear una lista personalizada de películas para ver después, para mejorar la experiencia del usuario, se ha utilizado Bootstrap para algunos estilos de la interfaz de usuario, y Splide para crear carruseles de películas. Una de las características más destacadas de este proyecto es la integración con la API de OMDb; El usuario administrador puede buscar películas por nombre y agregarlas a el catalogo de peliculas, además, el proyecto cuenta con un sistema de administración(CRUD) para agregar nuevas películas y categorías, el cual solo el usuario administrador tiene acceso a estas funciones. Para mejorar la seguridad del proyecto, se ha implementado middleware de rutas para controlar el acceso a ciertas partes de la aplicación; En resumen, este proyecto es una aplicación web completa que ofrece una experiencia de usuario mejorada y una amplia gama de funciones para ver y administrar películas. Este sitio es responsive, por lo que el contenido se puede visualizar tanto en dispositivos móviles como en computadoras portátiles.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Livewire', 'Consumo de API', 'MYSQL', 'Laravel'],
      }
    },
    {
      title: 'PRODUCTS HUB ADMIN REACT',
      img: 'assets/products-hub-admin.png',
      showNumber: 9,
      link: 'https://carlosjaramillo.beauty/products-hub-admin/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/react-product-admin',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'JSX', 'PHP', 'API', 'SQL', 'Laravel', 'React'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript', 'JSX'], ['PHP', 'SQL', 'API'], ['React', 'Laravel']],
      moreProject: {
        name: 'Products Hub amdin',
        shortDescription: 'Administrador de productos, para la pagina Productus Hub, APP creada con React.',
        description: 'El Administrador de Productos ha sido diseñado de manera integral para gestionar productos, categorías, subcategorías y marcas dentro del entorno de la aplicación Products Hub, la cual tambien fue desarrollada por mí. Esta aplicación se fundamenta en React Router DOM para implementar el enrutamiento de la Single Page Application (SPA); En conjunto con esta arquitectura, se emplea Axios para facilitar las peticiones a la API asociada, la cual se encuentra disponible para su utilización y revisión. En la estructura de esta aplicación, se ha integrado Toastify como una solución para la presentación de notificaciones relacionadas con las operaciones realizadas mediante peticiones a la API, proporcionando una experiencia de usuario informada y receptiva. Dentro del código base, se ha adoptado una estrategia que aprovecha los Hooks useState y useEffect de React para la creación y gestión eficiente de los diversos componentes que componen la aplicación; La utilización de estos Hooks no solo simplifica la manipulación del estado y efectos secundarios, sino que también mejora la estructura general del código, permitiendo un desarrollo más mantenible y escalable. Adicionalmente, se han creado Custom Hooks específicos para la reutilización de código entre distintos componentes, promoviendo así la modularidad y la eficiencia en el desarrollo; Este enfoque contribuye a la cohesión del código, permitiendo una mayor flexibilidad y adaptabilidad a medida que evoluciona el proyecto. En resumen, el Administrador de Productos no solo ofrece una interfaz intuitiva y funcional para la gestión de productos, categorías, subcategorías y marcas, sino que también se beneficia de una arquitectura tecnológica avanzada que incorpora las mejores prácticas de desarrollo y facilita la expansión futura del sistema.',
        technologies: ['PHP', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'JSX', 'Laravel', 'Santcum', 'React', 'React router DOM', 'Toastify', 'Axios'],
      }
    },
    {
      title: 'PRODUCTS HUB ECOMMERCE VUE 3',
      img: 'assets/products-hub.png',
      showNumber: 10,
      link: 'https://carlosjaramillo.beauty/products-hub/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/vue-products-hub',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'API', 'SQL', 'Laravel', 'Vue 3'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript'], ['PHP', 'SQL', 'API'], ['Vue 3', 'Laravel']],
      moreProject: {
        name: 'Products Hub Ecommerce con Vue 3',
        shortDescription: 'Ecommerce demostrativo desarrollado con Vue 3 Compositio API',
        description: 'El desarrollo de un Ecommerce utilizando el framework de Front End Vue 3, en su modalidad Composition API, representa una implementación avanzada y eficiente en términos de arquitectura y rendimiento; Este proyecto se integra con una API robusta creada con Laravel, aprovechando el paquete de autenticación Sanctum, así como un sistema de autenticación personalizado desarrollado internamente. La estructura de enrutamiento se ha configurado mediante el paquete Vue Router, permitiendo la construcción de una Single Page Application (SPA) fluida y altamente receptiva; Además, se ha adoptado Vuex como solución para la gestión centralizada del estado de la aplicación, lo que facilita la coordinación de datos entre todos los componentes. La comunicación con la API se realiza de manera eficiente a través de la biblioteca Axios, permitiendo la emisión y recepción de solicitudes HTTP de manera fluida y segura; Para mejorar la experiencia del usuario, se ha implementado la biblioteca Vue-Toastify, proporcionando notificaciones en tiempo real para las diversas interacciones con la API, lo que garantiza una interacción más dinámica. Es importante destacar que este sitio se presenta como un entorno demostrativo, exento de la capacidad de generar ingresos o realizar pedidos con los productos expuestos; Su propósito principal radica en exhibir las capacidades técnicas y funcionales del Ecommerce desarrollado, así como servir como un entorno de pruebas para validar su desempeño y funcionalidad en un entorno simulado de producción.',
        technologies: ['PHP', 'SQL', 'HTML5', 'CSS3', 'JavaScript', 'Laravel', 'Santcum', 'Vue 3', 'Vuex', 'Vue router', 'Toastify', 'Axios'],
      }
    },
    {
      title: 'API PRODUCTS HUB',
      img: 'assets/api-products-hub.png',
      showNumber: 11,
      link: 'https://carlosjaramillo.beauty/products-hub-api-documentation/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero',
      targets: ['Laravel', 'PHP', 'SQL', 'API'],
      technologiesProfolie: [['PHP', 'SQL', 'API'], ['Laravel', ' Sanctum'], ['Arquitectuta en capas']],
      moreProject: {
        name: 'API de la página Products Hub',
        shortDescription: 'Esta API ha sido diseñada específicamente para el portal Products Hub, brindando soporte tanto en el comercio electrónico (ecommerce) como en la gestión administrativa.',
        description: 'Desarrollo de API REST robusta para el portal de Products Hub, diseñada para su implementación tanto para el Ecommerce como para las tareas administrativas; Esta API construida sobre el Framework Laravel, destaca por su eficiencia y flexibilidad en la gestion de recursos. Sistema de Autenticación Seguro:|La API hace uso del paquete Laravel Sanctum para proporcionar un sistema de autenticación sólido, garantizando la seguridad de las transacciones tanto para usuarios finales como para el personal administrativo. Utilización de Middlewares:|Se ha implementado un sistema de Middlewares personalizado utilizando las funcionalidades ofrecidas por Laravel, lo que permite gestionar de manera eficiente las peticiones HTTP, incluyendo la autenticación, la validación de datos y la autorización de acceso a recursos. Arquitectura en Capas Organizada:|La estructura de la API sigue una arquitectura en capas bien definida, que incluye controladores, servicios y repositorios; Esta organización modular facilita la mantenibilidad del código y mejora la escalabilidad del sistema. Interfaces para Mejor Mantenimiento:|Se han creado interfaces para los repositorios y servicios utilizados por los controladores, lo que contribuye a una estructura más clara y un mantenimiento más sencillo a lo largo del ciclo de vida del software. Serialización de Datos Eficiente:|La API utiliza las capacidades de serialización de datos de Laravel para convertir los modelos y colecciones en formatos compatibles, como JSON, permitiendo una comunicación eficiente entre el servidor y los clientes de la API. Gestión de Respuestas HTTP y Códigos de Estado:|Se han implementado mecanismos para gestionar las respuestas HTTP y los códigos de estado de manera coherente, proporcionando información clara sobre el resultado de las solicitudes realizadas a la API. Documentación Clara y Concisa:|Se ha elaborado una documentación detallada que describe de manera clara y concisa el funcionamiento de la API, incluyendo la lista de endpoints disponibles y los parámetros esperados, facilitando su integración y uso por parte de los desarrolladores externos. Con todos estos elementos en juego, la API de Products Hub se posiciona como una solución completa y robusta, capaz de satisfacer las necesidades tanto del comercio electrónico como de la gestión administrativa, ofreciendo un alto nivel de seguridad, eficiencia y mantenibilidad',
        technologies: ['PHP', 'SQL', 'Laravel', 'API', 'Sanctum', 'Arquitectuta en capas'],
      }
    },
    {
      title: 'CONSUMO API REST CON VUE 3',
      img: 'assets/api-rest-vue.png',
      showNumber: 7,
      link: 'https://carlosjaramillo.beauty/consumo-ap-rest-vue/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/Consumo_API_REST_Vue_Composition_API',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'API', 'SQL', 'Laravel', 'Vue 3'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript'], ['PHP', 'API', 'SQL'], ['Laravel', 'Vue 3']],
      moreProject: {
        name: 'Consumo de API REST con Vue 3 (Composition API)',
        shortDescription: 'Este proyecto consume una API creada con laravel, la cual tiene un CRUD de servicios y clientes.',
        description: 'Para este proyecto, se diseñó y desarrolló una API robusta utilizando Laravel, incorporando el paquete de autenticación Sanctum de Laravel; En dicha API, se implementaron operaciones CRUD dedicadas a los clientes y servicios, proporcionando una gestión completa de los datos. En la capa del frontend, se optó por Vue 3 con Composition API; Para la navegación del proyecto de una sola página(SPA), se empleó Vue Router, configurando rutas eficientes y asegurando su protección mediante la autenticación de los Guards de Vue Router; Además, se integró Vuex para almacenar de manera centralizada la información recuperada de la API relacionada con clientes y servicios; La sincronización automática entre componentes se logró gracias a la conexión de estos componentes con los estados de Vuex, permitiendo una experiencia coherente y en tiempo real. En el proceso de validación de datos, se implementó Vuelidate, una herramienta que garantiza la integridad de la información antes de realizar las peticiones a la API; Esto se traduce en una capa adicional de seguridad y consistencia en el flujo de datos. La gestión de solicitudes HTTP a la API se simplificó utilizando Axios, una biblioteca conocida por su eficiencia y flexibilidad en el manejo de comunicaciones basadas en HTTP; Para orquestar estas solicitudes y mantener un código organizado, se creó una clase dedicada que abstrae y centraliza todas las interacciones con la API REST. Para mejorar la experiencia del usuario, se implementó Toastify, una biblioteca que facilita la presentación de notificaciones de manera atractiva y efectiva; Esto garantiza que cualquier acción importante, como la creación o modificación de clientes y servicios, se comunique de manera clara y visualmente agradable al usuario final.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MYSQL', 'Laravel', 'Vue 3', 'Vue Router', 'Vuex', 'Vuelidate', 'Axios'],
      }
    },
    {
      title: 'LISTA DE TAREAS VUE 3',
      img: 'assets/task-list.png',
      showNumber: 8,
      link: 'https://carlosjaramillo.beauty/task-list/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/task_list_Vue',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'API', 'SQL', 'Laravel', 'Vue 3'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript'], ['PHP', 'API', 'SQL'], ['Laravel', 'Vue 3']],
      moreProject: {
        name: 'Lista de tareas con Vue 3 (Composition API) y Laravel',
        shortDescription: 'Este proyecto consume una API creada con laravel, la cual tiene un CRUD de tareas y listas de tareas.',
        description: 'Para este proyecto, se diseñó y desarrolló una API robusta utilizando Laravel, incorporando el paquete de autenticación Sanctum de Laravel; En dicha API, se implementaron operaciones CRUD dedicadas a las tareas y lista de tareas, proporcionando una gestión completa de los datos. En la capa del frontend, se optó por Vue 3 con Composition API; Para la navegación del proyecto de una sola página(SPA), se empleó Vue Router, configurando rutas eficientes y asegurando su protección mediante la autenticación de los Guards de Vue Router; Además, se integró Vuex para almacenar de manera centralizada la información recuperada de la API relacionada con las tareas y listas de tareas; La sincronización automática entre componentes se logró gracias a la conexión de estos componentes con los estados de Vuex, permitiendo una experiencia coherente y en tiempo real. La gestión de solicitudes HTTP a la API se simplificó utilizando Axios, una biblioteca conocida por su eficiencia y flexibilidad en el manejo de comunicaciones basadas en HTTP; Para orquestar estas solicitudes y mantener un código organizado, se creó una clase dedicada que abstrae y centraliza todas las interacciones con la API REST. Para cada acción que se haga con las tareas o listas de tareas, se manda un correo electrónico al email del usuario, ya sea cuando se crea una tarea o cuando se archiva una lista de tareas. Para mejorar la experiencia del usuario, se implementó Toastify, una biblioteca que facilita la presentación de notificaciones de manera atractiva y efectiva; Esto garantiza que cualquier acción importante, como la creación o modificación de tareas o listas de tareas, se comunique de manera clara y visualmente agradable al usuario final.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MYSQL', 'Laravel', 'Vue 3', 'Vue Router', 'Vuex', 'Axios'],
      }
    },
    {
      title: 'PACMAN CON ANGULAR',
      img: 'assets/pacman.png',
      showNumber: 5,
      link: 'https://carlosjaramillotinajero.github.io/pacmanAngular/',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/pacmanAngular',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular'],
      technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript', 'TypeScript'], ['Angular']],
      moreProject: {
        name: 'Pacman con Angular',
        shortDescription: 'Este proyecto es un videojuego 2D tipo Pacman.',
        description: "Este proyecto fue desarrollado con Angular y utilizó el archivo app_component_ts para implementar la lógica del juego. Se utilizaron TimeOut's e Interval's para controlar el comportamiento del jugador y los fantasmas. Este proyecto es reponsive, por lo cual se puede jugar tambien en dispositivos móviles.",
        technologies: ['HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'Angular'],
      }
    },
    {
      title: 'PORTAFOLIO',
      img: 'assets/portafolio.png',
      showNumber: 3,
      link: 'https://carlosjaramillo.beauty/portafolio',
      linkGitHub: 'https://github.com/CarlosJaramilloTinajero/Portafolio',
      targets: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular'],
      technologiesProfolie: [['HTML5', 'CSS', 'JavaScript', 'TypeScript'], ['Angular']],
      moreProject: {
        name: 'Portafolio',
        shortDescription: 'Este proyecto presenta una breve descripción de mí y mis habilidades en el desarrollo web, así como una selección de mis proyectos más relevantes.',
        description: 'En este proyecto, muestro algunas de mis habilidades en el desarrollo web, utilizando lenguajes como HTML, CSS, JavaScript, TypeScript, PHP y MySQL, así como frameworks y librerías para mejorar y optimizar mi trabajo y los resultados. Además, presento un portafolio con algunos de los proyectos que he realizado, utilizando diversos lenguajes y frameworks de back-end y front-end. Para facilitar el contacto, he incluido una sección de contacto en la que podrás encontrar mis datos de contacto y enviarme un mensaje. Este proyecto es responsive por lo que se puede visualizar en dispositivos móviles.',
        technologies: ['HTML5', 'CSS3', 'TypeScript', 'Angular'],
      }
    },
    // {
    //   title: 'ADMINISTADOR DE SALAS',
    //   img: 'assets/Proyecto_Salas.png',
    //   showNumber: 1,
    //   link: 'https://carlosjaramillotinajero.github.io/angularSalas/',
    //   linkGitHub: 'https://github.com/CarlosJaramilloTinajero/angularSalas',
    //   technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript', 'TypeScript'], ['PHP', 'API', 'SQL'], ['Laravel', 'Angular']],
    //   moreProject: {
    //     name: 'Administracion de reservas de salas',
    //     shortDescription: 'Este proyecto crea y gestiona reservas para diferentes salas.',
    //     description: 'Este proyecto fue desarrollado utilizando Angular, un framework de FrontEnd, con el que se mostró todo el contenido obtenido a través de peticiones HTTP a una API creada con Laravel. Gracias a este proyecto, contamos con un sistema de gestión de reservas de salas, que nos permite agendar reservas a través de un sistema de gestión de reservas. Este proyecto nos brinda la posibilidad de realizar operaciones básicas de gestión de datos (CRUD) tanto para las salas como para las reservas',
    //     technologies: ['HTML5', 'CSS3', 'TypeScript', 'PHP', 'MYSQL', 'Laravel', 'Angular'],
    //   }
    // },
    // {
    //   title: 'ADMINISTADOR DE PEDIDOS',
    //   img: 'assets/pedidos.png',
    //   showNumber: 4,
    //   link: 'https://carlosjaramillotinajero.github.io/pedidos/',
    //   linkGitHub: 'https://github.com/CarlosJaramilloTinajero/pedidos/',
    //   technologiesProfolie: [['HTML5', 'CSS3', 'JavaScript', 'TypeScript'], ['PHP', 'API', 'SQL'], ['Laravel', 'Angular']],
    //   moreProject: {
    //     name: 'Administrador de pedidos',
    //     shortDescription: 'Este proyecto está diseñado para organizar y llevar un registro de los pedidos que he llevado en mi trabajo como repartidor de una pollería',
    //     description: 'Este proyecto sirve como un administrador de pedidos que he llevado en mi trabajo como repartidor. Cuenta con un CRUD (Create, Read, Update, Delete) de pedidos por llevar y pedidos llevados, así como un CRUD de deudas para poder gestionarlas. Para el front-end de este proyecto, se utilizó el framework de Angular y para el back-end, se hicieron peticiones HTTP a una API creada en Laravel. Este proyecto me resulta muy útil porque me permite llevar un control preciso de cuánto dinero recibo por el precio del pedido y cuánto me dan de propina por cada pedido; De esta manera, puedo revisar en cualquier momento los registros de los pedidos y asegurarme de que todo esté en orden.',
    //     technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'MYSQL', 'Laravel', 'Angular'],
    //   }
    // }
  ];

  projectsFilter: any = this.projects;

  proyectoSelect: number = 0;
  constructor(private popUpService: PopupService) { }

  ngOnInit(): void {
  }

  verProyecto(num: number, project: string) {
    window.scroll(0, 220);
    this.proyectoSelect = num;
    if (APP_DEBUG) return;
    this.popUpService.typeSend('Click en el proyecto ' + project + ' del portafolio y se abrio la información el proyecto').subscribe(
      data => {

      }
    );
  }

  enterUrlProject(project: string): void {
    if (APP_DEBUG) return;
    this.popUpService.typeSend('Click en el proyecto ' + project + ' del portafolio y se abrio el proyecto').subscribe(
      data => {

      }
    );
  }

  changeFilter(): void {
    if (this.filter === '') this.projectsFilter = this.projects;
    else
      this.projectsFilter = this.projects.filter((value: any) => value?.targets?.some((elm: any) => elm === this.filter))
  }

}
