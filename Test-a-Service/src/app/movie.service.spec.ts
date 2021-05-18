import {MovieService} from './movie.service';

describe('MovieService', () => {
    let movieService: MovieService;

    beforeEach(() => {
        movieService = new MovieService('Rambo');
    });

    it('adding a cast member increases the cast member count by one', () => {
        movieService.addCastMember('Sylveter', 'Rambo');

        expect(movieService.castMembers.length).toBe(1);
    });
});
