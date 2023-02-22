import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  name: string = 'mati';

  enMayusculas: boolean = false;

  cambiarNombre() {
    this.enMayusculas = !(this.enMayusculas);
  }
}
