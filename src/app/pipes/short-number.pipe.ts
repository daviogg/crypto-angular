import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(n: number, args?: any): unknown {
    if (isNaN(n)) { return null; }
    if (n === null) { return null; }
    if (n === 0) { return null; }
    let abs = Math.abs(n);
    const rounder = Math.pow(10, 1);
    const isNegative = n < 0;
    let key = '';

    const powers = [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'K', value: 1000 }
    ];

    for (const item of powers) {
      let reduced = abs / item.value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = item.key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs + key;
  }

}
