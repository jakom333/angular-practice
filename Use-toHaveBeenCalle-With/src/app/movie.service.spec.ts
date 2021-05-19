import {MovieService} from './movie.service';
import {of} from 'rxjs';


describe('MovieService', () => {
    let movieService: MovieService;
    let mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('http', ['post']);
        movieService = new MovieService(mockHttp);
    });

    it('should use the correct URL when saving the new cast member', () => {
        mockHttp.post.and.returnValue(of(true));

        movieService.addCastMember('Rambo 1', 'Sylvester', 'Rambo');

        expect(false).toBe(true);

    });
});
