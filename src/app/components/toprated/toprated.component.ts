import { Component } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toprated',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './toprated.component.html',
  styleUrl: './toprated.component.css'
})
export class TopratedComponent {

  topratedMovies: any[] = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe({
      next: (response: any) => {
        this.topratedMovies = response.results;
        console.log(response);

      },
      error: (error: any) => {
        console.error('Error fetching toprated movies:', error);
      },
      complete: () => {
        console.log('Fetch toprated movies complete');
      }
    });
  }
  onHomeBack() {
    setTimeout(() => {
      this.router.navigate(['/']);

    }, 1000);

  }
}
