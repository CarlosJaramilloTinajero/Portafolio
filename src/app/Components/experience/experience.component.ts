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
