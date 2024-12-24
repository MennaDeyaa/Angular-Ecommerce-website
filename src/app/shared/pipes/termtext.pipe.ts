import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext'
})
export class TermtextPipe implements PipeTransform {

  transform(title:string,length:number): string {
    return title.split(' ').slice(0,length).join(' ');
  }

}
