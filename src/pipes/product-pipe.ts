import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productpipe'
})
export class ProductPipe implements PipeTransform {

    constructor() { }

    transform(value: any, query: string): any {
        return query ? value.reduce((prev, next) => {
            let item =  next['ean'].toString().includes(query);            
            if (next['description'].toUpperCase().includes(query.toUpperCase()) || next['ean'].toString().includes(query)) { prev.push(next); }
            return prev;
        }, []) : value;
    }
}