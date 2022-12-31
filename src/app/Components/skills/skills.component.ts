import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  colores: string[] = ["linear-gradient( 89.4deg,  rgba(194,0,39,1) 0.8%, rgba(10,35,104,1) 99.4% )",
    "linear-gradient( 179.4deg,  rgba(132,56,122,1) 14.6%, rgba(190,24,49,1) 104.7% )",
    "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )",
    "linear-gradient( 180.4deg,  rgba(188,120,236,1) -2.2%, rgba(29,133,163,1) 83.5% )",
    "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )",
    "radial-gradient( circle farthest-corner at 10% 20%,  rgba(147,67,67,1) 0%, rgba(111,27,27,1) 90% )",
    "linear-gradient( 106.9deg,  rgba(148,14,60,1) 60.9%, rgba(3,22,27,1) 122.3% )",
    "linear-gradient( 96.5deg,  rgba(39,103,187,1) 10.4%, rgba(16,72,144,1) 87.7% )",
    "radial-gradient( circle farthest-corner at 32.7% 82.7%,  rgba(173,0,171,1) 8.3%, rgba(15,51,92,1) 79.4% )"];

  coloresBoxShadow: string[] = ["194,0,39, .5",
    "132,56,122, .5",
    "115,18,81, .5",
    "188,120,236, .5",
    "0,152,155, .5",
    "147,67,67, .5",
    "148,14,60, .5",
    " 39,103,187, .5",
    "173,0,171, .5"];

  boxShadowDefault: string = "255, 255, 255, 0.5";

  colorLenguajes: string = "";
  colorBoxShadowLenguajes: string = this.boxShadowDefault;

  colorFrameworks: string = "";
  colorBoxShadowFrameworks: string = this.boxShadowDefault;


  @Input() select: number = 0;
  @Input() retraso: number = 0;
  @Input() iluminacion: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  pornerColorRandomLenguaje() {
    let i = this.getRandom(this.colores.length);
    this.colorLenguajes = this.colores[i];
    this.colorBoxShadowLenguajes = this.coloresBoxShadow[i];
  }

  pornerColorRandomFramework() {
    let i = this.getRandom(this.colores.length);
    this.colorFrameworks = this.colores[i];
    this.colorBoxShadowFrameworks = this.coloresBoxShadow[i];
  }

  getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

}
