import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'parent',
    template: `

        <h1>My Favorite Movies</h1>
        <div *ngFor="let movie of displayedMovies">
            {{movie.name}} - {{movie.rating}}
        </div>
        <div>&nbsp;</div>
        <div class="btn-group btn-group-lg">
            <button class="btn btn-primary" (click)="filter('G')">G</button>
            <button class="btn btn-primary" (click)="filter('PG')">PG</button>
            <button class="btn btn-primary" (click)="filter('PG-13')">PG-13</button>
            <button class="btn btn-primary" (click)="filter('R')">R</button>
        </div>

    `
})
export class ParentComponent implements OnInit {
    movies = [
        {name: "Star Wars Episode X", rating: "PG"},
        {name: "Rocky XV", rating: "PG-13"},
        {name: "Jaws the Revenge", rating: "R"},
        {name: "Avengers 6 - The Marriage of the Hulk", rating: "PG-13"},
        {name: "Finding Dory's Grandkids", rating: "G"},
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

    filter(rating) {

    }

}
