import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-home',
    template: `
        <p>{{myText | lowercase}}</p>
    `
})

export class HomeComponent implements OnInit {
    myText = 'HELLO THERE. MAKE ME RENDER IN LOWER CASE';

    constructor() {
    }

    ngOnInit(): void {
    }
}
