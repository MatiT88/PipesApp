import { Component } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Pepe';
  genero: string = 'masculino';
  invitacionMapa: any = {'femenino': 'invitarla', 'masculino': 'invitarlo'};

  // gender: string = 'male';
  // inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};

}
