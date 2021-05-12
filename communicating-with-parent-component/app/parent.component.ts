import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <div *ngIf="currentCounter">
      <h1>Congratulations!</h1>
      <h3>You set the parent's counter to: {{currentCounter}}</h3>
    </div>
    <child></child>
  `
  
})
export class ParentComponent {
  currentCounter
  
}
