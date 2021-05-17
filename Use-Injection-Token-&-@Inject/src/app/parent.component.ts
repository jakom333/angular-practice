import {Component, Inject, OnInit} from '@angular/core';
import {PRIME_CALC_TOKEN} from './primeCalc.service';

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
    prime: any;

    constructor(@Inject(PRIME_CALC_TOKEN) private primeCalc: any) {
    }

    ngOnInit(): void {
    }

    getPrime(): void {
        this.prime = this.primeCalc.calculatePrime();
    }

}
