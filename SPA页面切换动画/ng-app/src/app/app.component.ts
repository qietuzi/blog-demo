import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/slideIn.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'ng-app';

  index = 0

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['index'] || 0
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
