import {Injectable} from '@angular/core';

@Injectable()
export class MovieService {
    castMembers: any = [];
    movieName: string;

    constructor(name: string) {
        this.movieName = name;
    }

    addCastMember(name: string, part: string): void {
        const dup = this.castMembers.some((member: { name: string; part: string; }) => {
            return member.name === name || member.part === part;
        });

        if (!dup) {
            this.castMembers.push({name, part});
        }
    }
}
