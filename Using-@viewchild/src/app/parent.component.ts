import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'parent',
    template: `

        <h1>Using View Child</h1>
        <div style="display:none">Star Wars</div>
        <div style="display:none">Jaws</div>
        <div style="display:none">Titanic</div>
        <div style="display:none">Avatar</div>
        <div style="display:none">The Odd Couple</div>
        <div style="display:none">You've Got Mail</div>
        <div>The greatest movie of all time: {{greatest}}</div>
        <button class="btn btn-primary" >Click to Show</button>
    `
})
export class ParentComponent implements OnInit {
    greatest: string;
    @ViewChild()

    constructor() {
    }

    ngOnInit(): void {
    }

    // reveal () {
    //     this.greatest = ;
    // }

}
