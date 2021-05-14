import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {EventService} from './event.service';
import {FormControl, FormGroup} from '@angular/forms';

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
    `]
})
export class CreateEventComponent implements OnInit {
    createForm: FormGroup;
    location: FormGroup;
    name: FormControl = new FormControl();
    date: FormControl = new FormControl();
    time: FormControl = new FormControl();
    address: FormControl = new FormControl();
    city: FormControl = new FormControl();
    country: FormControl = new FormControl();

    constructor(private eventService: EventService, private router: Router) {

    }

    ngOnInit(): void {
        this.location = new FormGroup({
            address: this.address,
            city: this.city,
            country: this.country
        });

        this.createForm = new FormGroup({
            name: this.name,
            date: this.date,
            time: this.time,
            location: this.location
        });
    }

    save(event: any){
        this.eventService.saveEvent(event);
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}
