import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NowplayingComponent } from './components/nowplaying/nowplaying.component';
import { PopularComponent } from './components/popular/popular.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

export const routes: Routes = [

    {
        path: '', component: HomeComponent, title: 'NETFLIX | Home'
    },
    {
        path: 'nowplaying', component: NowplayingComponent, title: 'NETFLIX | NowPlaying'
    },
    {
        path: 'popular', component: PopularComponent, title: 'NETFLIX | Popular'
    },
    {
        path: 'toprated', component: TopratedComponent, title: 'NETFLIX | TopRated'
    },
    {
        path: 'upcoming', component: UpcomingComponent, title: 'NETFLIX | Upcoming'
    },
];
