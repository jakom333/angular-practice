import {Routes} from '@angular/router';
import {EventsListComponent} from './events-list.component';
import {EventDetailsComponent} from './event-details.component';


export const appRoutes: Routes = [
    {path: 'events/:eventId', component: EventDetailsComponent},
    {path: 'events', component: EventsListComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
];
