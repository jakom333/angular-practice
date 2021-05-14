import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {EventService} from './event.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {requireWeekday} from './weekday.validator';

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

        em {
            color: #E05C65;
            padding-left: 10px;
        }

        .error input {
            background-color: #E3C3C5;
        }
    `]
})
export class CreateEventComponent implements OnInit {
    createForm: FormGroup;
    location: FormGroup;
    name: FormControl = new FormControl('', Validators.required);
    date: FormControl = new FormControl('', [Validators.required, requireWeekday]);
    time: FormControl = new FormControl('', Validators.required);
    address: FormControl = new FormControl('', Validators.required);
    city: FormControl = new FormControl('', Validators.required);
    country: FormControl = new FormControl('', [Validators.required, Validators.pattern('[A-Z]{2}')]);

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

    save(event: any) {
        this.eventService.saveEvent(event);
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}
