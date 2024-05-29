import { Component } from '@angular/core';
import { LOGO_URL } from '../../service/config';
import { IconFieldModule } from 'primeng/iconfield';

import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UpcomingComponent } from '../upcoming/upcoming.component';
import { PopularComponent } from '../popular/popular.component';
import { TopratedComponent } from '../toprated/toprated.component';
import { NowplayingComponent } from '../nowplaying/nowplaying.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule, FormsModule, RouterLink, RouterLinkActive, UpcomingComponent, PopularComponent, TopratedComponent, NowplayingComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl = LOGO_URL;
}
