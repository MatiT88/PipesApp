import { Component } from '@angular/core';
import { interval } from 'rxjs';


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
  bandera:string = 'macho';

  //i18nPlural
  clientes: string[] = ['Juan','Pepe','Maria','Juan','Pepe','Maria'];
  clientesMap: any = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }
  
  cambiarNombre() {
    if (this.bandera === 'macho') {
      this.nombre = 'Julieta';
      this.genero = 'femenino';
      this.bandera = 'hembra';
    }else if (this.bandera === 'hembra'){
      this.nombre = 'Pepe';
      this.genero = 'masculino';
      this.bandera = 'macho';
    };
  }

  borrarCliente() {
    if ( this.clientes.length > 0 )
    this.clientes.pop();
  };

  //KeyValue Pipe
  persona = {
    nombre: 'Mati',
    edad: 34,
    direccion: 'San Lorenzo 135'
  }

  //Json Pipe
  heroes: object[] = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },{
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  //Async Pipe
  miObservable = interval(5000)

  valorPromesa = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data de una promesa')
    }, 3500);
  } );
}
