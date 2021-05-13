import {Component} from '@angular/core';
import {EventService} from './event.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'event-details',
    template: `
        <h4>Event Details</h4>
        <div>
            <div>{{event.name}}</div>
            <div>{{event.date}} </div>
            <div>{{event.time}}</div>
            <div>{{event.location.address}}, {{event.location.city}}, {{event.location.country}}</div>
        </div>
        <div class="back">
            <input type="checkbox" (click)="toggleReviewed()"/> Reviewed
        </div>
        <div class="back">
            <button class="btn btn-primary" (click)="returnToEvents()">Back to events</button>
        </div>
    `,
    styles: [`
        .back {
            margin-top: 10px;
        }
    `]
})
export class EventDetailsComponent {
    event: any;
    reviewed: boolean = false;

    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['eventId']);
    }

    returnToEvents() {
        this.router.navigate(['/events']);
    }

    toggleReviewed(){
        this.reviewed = !this.reviewed;
    }

}
