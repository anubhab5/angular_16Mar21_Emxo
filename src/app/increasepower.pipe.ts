import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increasepower'
})
export class IncreasepowerPipe implements PipeTransform {

  transform(value: unknown, ...args: number[]): number {
    return Math.pow(2, args[0]);
  }

}
