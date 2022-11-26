import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  copiado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  copyText(val: string, num: number) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.copiado = num;
    setTimeout(()=>{
      this.copiado = 0;
    }, 2000)
  }

  submitContacto(){

  }

}

