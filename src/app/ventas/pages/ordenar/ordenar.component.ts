import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
//Pipes personalizados start
  name: string = 'mati';

  enMayusculas: boolean = false;

  cambiarNombre() {
    this.enMayusculas = !(this.enMayusculas);
  }
//Pipes personalizados end

  items!: MenuItem[];

ngOnInit() {
    this.items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
        }
    ];
}
}

