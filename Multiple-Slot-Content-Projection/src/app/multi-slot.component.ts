import {Component} from '@angular/core';

@Component({
    selector: 'multi-slot',
    template: `
        <div class="well">
            <div style="border: 1px solid red">
                <ng-content select="[slot1]"></ng-content>
            </div>
            <div style="border: 1px solid blue">
                <ng-content select="[slot2]"></ng-content>
            </div>
            <div style="border: 1px solid green">
                <ng-content select="[slot3]"></ng-content>
            </div>
        </div>
    `
})

export class MultiSlotComponent {
}
