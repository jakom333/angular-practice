import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MoviesComponent} from './movies.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/movies/1',
                pathMatch: 'full'
            },
            {
                path: 'movies/:id',
                component: MoviesComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
