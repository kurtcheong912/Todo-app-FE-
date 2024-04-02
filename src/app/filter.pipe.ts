import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './tasks/task.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Task[], filterString: string, propName: string): Task[] {
    if (!value || !value.length) {
      return null;
    }
    if (!filterString.trim() || filterString === '') {
      return value
        .map((task, index) => ({ ...task, originalIndex: index }))
        .filter(task => {
          const propValue = task[propName];
          return propValue
        });
    }

    return value
      .map((task, index) => ({ ...task, originalIndex: index }))
      .filter(task => {
        const propValue = task[propName];
        return propValue && propValue.toString().toLowerCase().includes(filterString.toLowerCase());
      });
  }
}
