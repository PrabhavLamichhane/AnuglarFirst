import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTestPipe'
})
export class MyTestPipePipe implements PipeTransform {

  transform(value: string): any {
    return value + " Hi everyone";
  }

}
