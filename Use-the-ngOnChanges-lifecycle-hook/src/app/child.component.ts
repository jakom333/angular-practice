import {Component, Input} from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <h1 *ngIf="quantity > 1 && squaredQuantity === quantity * quantity">Congratulations!</h1>

        Quantity: {{quantity}}<br>
        Squared Quantity: {{squaredQuantity}}
    `
})

export class ChildComponent {
    @Input() quantity: number;
    squaredQuantity: number;

    constructor() {
    }

};
