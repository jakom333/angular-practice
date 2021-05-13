import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventsListComponent} from './events-list.component';
import {EventService} from './event.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {EventDetailsComponent} from './event-details.component';

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        EventDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [EventService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
