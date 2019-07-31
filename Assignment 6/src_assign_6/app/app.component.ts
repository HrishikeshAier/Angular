import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label>Marvellous Infosystems</label>
  <br><br>
  <input type="text">
  <app-new-comp></app-new-comp>`,
  styles: [`label{
    color: blue;
}`]
})
export class AppComponent {
  title = 'Demo';
}
