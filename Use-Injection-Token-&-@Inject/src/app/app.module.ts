import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ParentComponent} from './parent.component';
import {PRIME_CALC_TOKEN} from './primeCalc.service';

@NgModule({
    declarations: [
        AppComponent,
        ParentComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        {provide: PRIME_CALC_TOKEN, useValue: window['primeCalc']}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
