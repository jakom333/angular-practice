import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MovieService {
    castMembers: any = [];
    movieName: string;

    constructor(private http: HttpClient) {
    }

    addCastMember(name: string, part: string): void {
        const dup = this.castMembers.some((member: { name: string; part: string; }) => {
            return member.name === name || member.part === part;
        });

        if (!dup) {
            this.castMembers.push({name, part});
            this.storeNewCastMember(this.movieName, name, part).subscribe();
        }
    }

    storeNewCastMember(movieName: string, name: string, part: string): Observable<any> {
        console.log(1);
        return this.http.post('/movie/' + movieName + '', {name, part});
    }
}
