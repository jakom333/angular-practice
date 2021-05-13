import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EventsListComponent} from './events-list.component';
import {EventService} from './event.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {EventsListResolver} from './events-list-resolver.service';

@NgModule({
    declarations: [
        AppComponent,
        EventsListComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [EventService, EventsListResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
