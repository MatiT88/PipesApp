import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'matias';
  nombreUpper: string = 'MATIAS';
  nombreCompleto: string = 'mAtiAs tECici';

  fecha: Date = new Date(); //El dia de hoy


}
