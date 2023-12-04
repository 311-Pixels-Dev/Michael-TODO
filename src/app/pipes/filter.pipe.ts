import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'f',
    pure: false,
		standalone: true
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], f: (item: any) => boolean): any {
        if (!items || !f) {
            return items;
        }
        return items.filter(item => f(item));
    }
}