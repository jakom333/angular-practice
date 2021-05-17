import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-home',
    template: `
        {{theDate | date: 'longDate'}} - should be "April 1, 2035"<br>
        {{theDate | date: 'MM-dd-yyyy'}} - should be "04-01-2035"<br>
        {{theDate | date: 'shortTime'}} - should be "2:15 PM"<br>
        {{theDate | date: 'MMMM d, H:mm'}} - should be "April 1, 14:15"<br>
    `
})

export class HomeComponent implements OnInit {
    theDate = new Date(2035, 3, 1, 14, 15);

    constructor() {
    }

    ngOnInit(): void {
    }
}
