import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <child></child>
    <button class="btn btn-primary">Stop Timer</button>
  `
})
export class ParentComponent {
  
}
