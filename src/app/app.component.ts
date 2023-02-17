import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAppV2';

  nombre: string = 'mAtI tEcIcI';
  valor: number = 34;
  objeto: object = {nombre: this.nombre, edad: 34}

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.objeto);
  }
}
