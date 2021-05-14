import {FormControl} from '@angular/forms';


export function requireWeekday(control: FormControl): { [key: string]: any } {
    const date = new Date(control.value);
    // @ts-ignore
    if (isNaN(date)) { return null; }

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 6) {
        return {requireWeekday: 'Must not be a Saturday'};
    }
    if (dayOfWeek === 0) {
        return {requireWeekday: 'Must not be a Sunday'};
    }
    return null;
}
