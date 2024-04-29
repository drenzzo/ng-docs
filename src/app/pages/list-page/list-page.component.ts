import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDocComponent } from '../../components/card-doc/card-doc.component';

import { DocsService } from '../../services/doc.service';
import { Doc } from '../../interfaces/doc.interface';


@Component({
  selector: 'docs-list-page',
  standalone: true,
  imports: [
    CommonModule,
    CardDocComponent
  ],
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent {

  public docs: Doc[] = [];

  constructor(
    private docsService: DocsService
  ) { }

  ngOnInit(): void {
    this.docsService.getDocs()
      .subscribe(docs => this.docs = docs);
  }

}
