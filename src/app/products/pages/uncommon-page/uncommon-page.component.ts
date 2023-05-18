import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Pablo';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient(): void {
    this.name = 'Ariadna';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Pablo', 'Ariadna', 'Jorge', 'Eli'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue
  public person = {
    name: 'Pablo',
    age: 25,
    address: 'Mty, México'
  }

  // Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })
}
