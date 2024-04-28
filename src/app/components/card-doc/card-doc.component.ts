import { Component } from '@angular/core';
import { DocsService } from '../../services/doc.service';
import { Doc } from '../../interfaces/doc.interface';
import { CommonModule } from '@angular/common';
import { DocImagePipe } from '../../pipes/doc-image.pipe';

@Component({
  selector: 'card-doc',
  standalone: true,
  imports: [
    CommonModule,
    DocImagePipe
  ],
  templateUrl: './card-doc.component.html',
  styles: ``
})
export class CardDocComponent {

  public docs:Doc[] = [];
  public urlIco: string = "https://coderthemes.com/highdmin/layouts/assets/images/file_icons/"

  constructor (
    private docsService: DocsService
  ) {}

  ngOnInit(): void {
    this.docsService.getDocs()
      .subscribe( docs => this.docs = docs);
  }
}
