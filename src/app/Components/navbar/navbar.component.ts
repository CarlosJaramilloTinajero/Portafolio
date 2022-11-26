import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }


  @Output() selectedEvent: EventEmitter<number> = new EventEmitter();
  @Output() selectedAntEvent: EventEmitter<number> = new EventEmitter();

  @Input() selected: number = 0;
  selectedAnt: number = 0;
  habilitado: boolean = true;
  ngOnInit(): void {
  }

  cambiarSelect(num: number) {

    if (this.habilitado && num != this.selected) {
      this.habilitado = false;
      setTimeout(() => {
        this.habilitado = true;
      },2500);
      this.selectedAnt = this.selected;
      this.selected = num;
      this.selectedEvent.emit(this.selected);
      this.selectedAntEvent.emit(this.selectedAnt);
    }

  }

}
