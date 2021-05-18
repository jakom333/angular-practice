import {MovieService} from './movie.service';
import {of} from 'rxjs';


describe('MovieService', () => {
    let movieService: MovieService;
    let mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('http', ['post']);
        movieService = new MovieService(mockHttp);
    });

    it('adding a cast member increases the cast member count by one', () => {
        mockHttp.post.and.returnValue(of(true));

        movieService.addCastMember('Rambo 1', 'Sylvester', 'Rambo');

        expect(movieService.castMembers.length).toBe(1);

    });
});
