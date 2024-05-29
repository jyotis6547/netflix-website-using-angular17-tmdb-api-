import { Component } from '@angular/core';
import { MoviesService } from '../../service/movies.service';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule],
  providers: [MessageService],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {

  popularMovies: any[] = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe({
      next: (response: any) => {
        this.popularMovies = response.results;
        console.log(response);

      },
      error: (error: any) => {
        console.error('Error fetching popular movies:', error);
      },
      complete: () => {
        console.log('Fetch popular movies complete');
      }
    });
  }
  onHomeBack() {
    setTimeout(() => {
      this.router.navigate(['/']);

    }, 1000);

  }

}
