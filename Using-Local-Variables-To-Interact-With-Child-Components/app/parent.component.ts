import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <child #localChild></child>
    <button class="btn btn-primary" (click)="localChild.stopTimer()">Stop Timer</button>
  `
})
export class ParentComponent {
  
}
