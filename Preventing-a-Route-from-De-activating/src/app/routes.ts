import {Routes} from '@angular/router';
import {EventsListComponent} from './events-list.component';
import {EventDetailsComponent} from './event-details.component';
import {Error404Component} from './404.component';
import {EventRouteActivator} from './event-route-activator.service';


export const appRoutes: Routes = [
    {
        path: 'events/:eventId',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator],
        canDeactivate: [EventRouteActivator]
    },
    {path: 'events', component: EventsListComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
];
