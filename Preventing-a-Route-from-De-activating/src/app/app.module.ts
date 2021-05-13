import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventsListComponent} from './events-list.component';
import {EventService} from './event.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {EventDetailsComponent} from './event-details.component';
import {Error404Component} from './404.component';
import {EventRouteActivator} from './event-route-activator.service';

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        EventDetailsComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [EventService, EventRouteActivator],
    bootstrap: [AppComponent]
})
export class AppModule {
}
