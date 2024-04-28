import { Pipe, PipeTransform } from '@angular/core';
import { Doc } from '../interfaces/doc.interface';

@Pipe({
  name: 'docImage',
  standalone: true
})
export class DocImagePipe implements PipeTransform {

  transform(doc: Doc): string {
    return `https://coderthemes.com/highdmin/layouts/assets/images/file_icons/${doc.ico}`;
  }

}
