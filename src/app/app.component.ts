import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
    <input type="text" [value]="title">
    <app-home pageName="ascfgbhgfd"></app-home>
    <input type="text" [(ngModel)]="name">
    <ul>
      <li *ngFor="let name of names; index as s">
{{name}} - {{s}}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names: string[]=["g","q","w","ı","b"]
  title = 'your-proj2';
  name:string
}
