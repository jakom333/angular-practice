import {Component, OnInit} from '@angular/core';
import {EventService} from './event.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list-component.html',
  styles: [`
    th, td {
      font-size: 16px;
      padding: 5px 10px;
    }
  `]
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) {

  }


  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }


}
