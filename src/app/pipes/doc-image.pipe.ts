import { Pipe, PipeTransform } from '@angular/core';
import { Doc } from '../interfaces/doc.interface';

@Pipe({
  name: 'docImage',
  standalone: true
})
export class DocImagePipe implements PipeTransform {

  transform(doc: Doc): string {
    return `assets/icons/${doc.ico}`;
  }

}
