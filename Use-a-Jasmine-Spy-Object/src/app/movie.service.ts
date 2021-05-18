import {Injectable} from '@angular/core';
import {ActorService} from './actor.service';

@Injectable()
export class MovieService {
    castMembers: any = [];
    movieName: string;

    constructor(name: string) {
        this.movieName = name;
    }

    addCastMember(name: string, part: string, actorService: ActorService) {
        const dup = this.castMembers.some((member: { name: string; part: string; }) => {
            return member.name === name || member.part === part;
        });

        const ok = actorService.canAddMovieToActor(name, this.movieName);

        if (!dup && ok) {
            this.castMembers.push({name, part});
        }
    }
}
