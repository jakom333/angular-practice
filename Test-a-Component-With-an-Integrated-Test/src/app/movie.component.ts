import {Component} from '@angular/core';


@Component({
    selector: 'movies',
    template: `
        <div>
            <h1>{{title}}</h1>
            <div *ngFor="let movie of movies">
                {{movie.name}} rated {{movie.rating}}
            </div>
        </div>
    `,
    styles: ['div { visibility: hidden}']
})

export class MovieComponent {
    title = 'Movies';
    movies = [
        {name: 'Rambo', rating: 'R'},
        {name: 'Star Wars', rating: 'PG-13'},
        {name: 'Avatar', rating: 'PG-13'},
    ];

    constructor() {
    }
};
