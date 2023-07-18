import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Output() clousePupEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closePup(type: number): void {
    this.clousePupEvent.emit(type);

    if (type != 0) {
      localStorage.setItem('checkPup', '1');
    }
  }
}
