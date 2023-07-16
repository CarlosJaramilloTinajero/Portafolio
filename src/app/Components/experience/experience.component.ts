import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

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

}
