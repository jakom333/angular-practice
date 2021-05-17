import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'titlecase'})

export class TitleCasePipe implements PipeTransform {
    transform(input: string): string {
        const words = input.split(' ');
        const caseWords = words.map(word => word[0].toLocaleUpperCase() + word.slice(1));
        return caseWords.join(' ');
    }
};
