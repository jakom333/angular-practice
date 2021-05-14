import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventsListComponent} from './events-list.component';
import {EventService} from './event.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './create-event.component';

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
        CreateEventComponent
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
