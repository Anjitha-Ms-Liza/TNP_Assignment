import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinpipe',
  pure: false
})
export class PipesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.join();
  }

}
