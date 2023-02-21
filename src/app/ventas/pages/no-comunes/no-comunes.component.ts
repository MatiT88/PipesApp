import { Component } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Pepe';
  genero: string = 'masculino';
  invitacionMapa: any = {'femenino': 'invitarla', 'masculino': 'invitarlo'};

  //i18nPlural
  clientes: string[] = ['k','g','c'];
  clientesMap: any = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }
  
}
