import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nowplaying',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './nowplaying.component.html',
  styleUrl: './nowplaying.component.css'
})
export class NowplayingComponent {

  NowPlayingMovies: any[] = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movieService.getNowPlayingMovies().subscribe({
      next: (response: any) => {
        this.NowPlayingMovies = response.results;
        console.log(response);

      },
      error: (error: any) => {
        console.error('Error fetching nowplaying movies:', error);
      },
      complete: () => {
        console.log('Fetch nowplaying movies complete');
      }
    });
  }
  onHomeBack() {
    setTimeout(() => {
      this.router.navigate(['/']);

    }, 1000);

  }

}
