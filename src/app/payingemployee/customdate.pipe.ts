import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customdate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any): any {
    const date : any= new Date(value);
    return new DatePipe('en-US').transform(date, 'MMMM');
    
  }
}

