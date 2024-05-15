import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Doc } from '../../interfaces/doc.interface';
import { DocsService } from '../../services/doc.service';


@Component({
  selector: 'docs-search-doc',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './search-doc.component.html',
  styles: ``
})
export class SearchDocComponent {

  public items: Doc[] = [];

  constructor(
    private docsService: DocsService
  ) { }

  ngOnInit(): void {
    this.docsService.getDocs()
      .subscribe((data: Doc[]) => {
        this.items = data;
      });
  }


}
