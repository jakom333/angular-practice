import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {EventService} from './event.service';

@Component({
    selector: 'create-event',
    templateUrl: 'create-event.component.html',
    styles: [`
        form {
            margin-top: 10px;
        }

        label {
            display: block;
        }

        .form-group {
            margin-top: 5px;
        }
        em {color:#E05C65; padding-left:10px;}
        .error input {background-color:#E3C3C5;}
    `]
})
export class CreateEventComponent implements OnInit {
    name: string;
    date: string;
    time: string;
    address: string;
    city: string;
    country: string;

    constructor(private eventService: EventService, private router: Router) {

    }

    ngOnInit(): void {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    save(formValues: any) {
        this.eventService.saveEvent(formValues);
        this.router.navigate(['/events']);
        console.log(formValues);
    }
}
