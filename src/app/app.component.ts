import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { NowplayingComponent } from './components/nowplaying/nowplaying.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopularComponent, NowplayingComponent, TopratedComponent, NowplayingComponent, UpcomingComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'extra';
}
