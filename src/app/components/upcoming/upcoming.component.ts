import { Component } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent {


  upcomingMovies: any[] = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movieService.getUpcomingMovies().subscribe({
      next: (response: any) => {
        this.upcomingMovies = response.results;
        console.log(response);

      },
      error: (error: any) => {
        console.error('Error fetching upcoming movies:', error);
      },
      complete: () => {
        console.log('Fetch upcoming movies complete');
      }
    });
  }

  onHomeBack() {
    setTimeout(() => {
      this.router.navigate(['/']);

    }, 1000);

  }

}
