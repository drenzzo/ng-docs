import { Component, Input } from '@angular/core';
import { Doc } from '../../interfaces/doc.interface';
import { DocImagePipe } from '../../pipes/doc-image.pipe';

@Component({
  selector: 'docs-doc-card',
  standalone: true,
  imports: [
    DocImagePipe
  ],
  templateUrl: './card-doc.component.html',
  styles: ``
})
export class CardDocComponent {

  @Input() public doc!: Doc;

  ngOnInit(): void {
    if ( !this.doc ) throw Error ("La propiedad 'doc' es requerida");
  }

  // public urlIco: string = "https://coderthemes.com/highdmin/layouts/assets/images/file_icons/"

}
