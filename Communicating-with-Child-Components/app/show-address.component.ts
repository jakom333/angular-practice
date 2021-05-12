import { Component, Input } from '@angular/core';

@Component({
    selector: 'show-address',
    templateUrl: 'app/show-address.component.html'
})
export class ShowAddressComponent {
    @Input() address;
}
