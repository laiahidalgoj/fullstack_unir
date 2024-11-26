import { Component } from '@angular/core';
import {IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [ IonApp, IonRouterOutlet, IonicModule]
})
export class AppComponent {
  constructor() {}
}
