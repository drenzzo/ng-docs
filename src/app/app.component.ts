import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardDocComponent } from './components/card-doc/card-doc.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardDocComponent,
    LayoutPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-docs';
}
