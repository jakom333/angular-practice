import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
    selector: 'parent',
    template: `
        <h1>Making a Request</h1>

        <button class="btn btn-primary" (click)="makeRequest()">Send Request</button>

        <div *ngFor="let movie of movieList">
            {{movie.title}}
        </div>
    `
})
export class ParentComponent {
    movieList;

    constructor(private http: HttpClient) {
    }

    makeRequest() {
    }
}
