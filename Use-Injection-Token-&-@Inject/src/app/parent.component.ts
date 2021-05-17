import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'parent',
    template: `

        <h1>Prime Number</h1>
        The Prime Number Is: {{prime}}<br/>
        <div *ngIf="prime === 5">Success!</div>
        <button class="btn btn-primary" (click)="getPrime()">Get Prime #</button>
    `
})
export class ParentComponent implements OnInit {
    prime;

    constructor() {
    }

    ngOnInit(): void {
    }

    getPrime() {
        //this.prime =
    }

}
