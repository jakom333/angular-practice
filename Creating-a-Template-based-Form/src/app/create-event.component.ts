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
    `]
})
export class CreateEventComponent implements OnInit {
    constructor(private eventService: EventService, private router: Router) {

    }

    ngOnInit(): void {
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
