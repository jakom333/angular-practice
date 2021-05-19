import {async, inject, ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieComponent} from './movie.component';

let fixture: ComponentFixture<MovieComponent>;

describe('MovieComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovieComponent],
            providers: []
        })
            .compileComponents().then(() => {
            fixture = TestBed.createComponent(MovieComponent);
        });
    }));

    it('should display the movies', () => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement.textContent).toContain('Rambo');
        expect(fixture.debugElement.nativeElement.textContent).toContain('Star Wars');
        expect(fixture.debugElement.nativeElement.textContent).toContain('Avatar');
    });

});
