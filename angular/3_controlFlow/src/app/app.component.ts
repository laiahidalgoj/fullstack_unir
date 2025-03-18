import { Component } from '@angular/core';
import { SeriesComponent } from './components/series/series.component';
import { ISerie } from './interfaces/iserie.interface';
import { TabsComponent } from './components/tabs/tabs.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import { StylesComponent } from './components/styles/styles.component';

@Component({
  selector: 'app-root',
  imports: [SeriesComponent, TabsComponent, NotificationsComponent, StylesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arraySeries: ISerie[] = [
    {
      "id": 1,
      "title": "Breaking Bad",
      "director": "Vince Gilligan",
      "categoria": "Drama",
      "poster": "https://example.com/breaking_bad.jpg"
    },
    {
      "id": 2,
      "title": "Stranger Things",
      "director": "The Duffer Brothers",
      "categoria": "Ficción",
      "poster": "https://example.com/stranger_things.jpg"
    },
    {
      "id": 3,
      "title": "Game of Thrones",
      "director": "David Benioff & D.B. Weiss",
      "categoria": "Fantasía",
      "poster": "https://example.com/game_of_thrones.jpg"
    },
    {
      "id": 4,
      "title": "The Witcher",
      "director": "Lauren Schmidt Hissrich",
      "categoria": "Fantasía",
      "poster": "https://example.com/the_witcher.jpg"
    },
    {
      "id": 5,
      "title": "Sherlock",
      "director": "Paul McGuigan",
      "categoria": "Misterio",
      "poster": "https://example.com/sherlock.jpg"
    }
  ]
}
