import { Component } from '@angular/core';
import { ListPageComponent } from '../list-page/list-page.component';
import { SearchDocComponent } from '../../components/search-doc/search-doc.component';

@Component({
  selector: 'docs-layout-page',
  standalone: true,
  imports: [
    ListPageComponent,
    SearchDocComponent
  ],
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

}
