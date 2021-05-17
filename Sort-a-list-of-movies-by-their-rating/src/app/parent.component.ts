import { Component } from '@angular/core';

@Component({
    selector: 'parent',
    template: `

        <h1>My Favorite Movies</h1>
        <div *ngFor="let movie of movies">
            {{movie.name}} - {{movie.rating}}
        </div>
        <div>&nbsp;</div>
        <button class="btn btn-primary" (click)="sortAsc()">By Rating Ascending</button>
        <button class="btn btn-primary" (click)="sortDesc()">By Rating Descending</button>
    `
})
export class ParentComponent implements OnInit {
    movies = [
        { name:  "Star Wars Episode X", rating: "PG" },
        { name:  "Rocky XV", rating: "PG-13" },
        { name:  "Jaws the Revenge", rating: "R" },
        { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
        { name:  "Finding Dory's Grandkids", rating: "G" },
    ]

    constructor() {
    }

    sortAsc() {
        // implement
    }

    sortDesc() {
        // implement
    }


}
