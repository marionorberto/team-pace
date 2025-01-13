import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'marionorberto';
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const loader = document.getElementById('loading-spinner');
      if (loader) {
        setTimeout(() => {
          loader.style.display = 'none';
        }, 2500)
      }
    }
  }
}
