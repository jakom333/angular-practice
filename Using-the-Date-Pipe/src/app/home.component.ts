import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-home',
    template: `
        {{theDate}} - should be "April 1, 2035"<br>
        {{theDate}} - should be "04-01-2035"<br>
        {{theDate}} - should be "2:15 PM"<br>
        {{theDate}} - should be "April 1, 14:15"<br>
    `
})

export class HomeComponent implements OnInit {
    theDate = new Date(2035, 3, 1, 14, 15);

    constructor() {
    }

    ngOnInit(): void {
    }
}
