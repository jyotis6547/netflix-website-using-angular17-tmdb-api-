import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MoviesService } from '../../service/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullhome',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './fullhome.component.html',
  styleUrl: './fullhome.component.css'
})
export class FullhomeComponent {

  popularMovies = [];
  topratedMovies = [];
  upcomingMovies = [];
  nowplayingMovies = [];
  responsiveOptions: any[] = [];

  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {

    this.loadPopularMovies();
    this.loadTopRatedMovies();
    this.loadUpcomingMovies();
    this.loadNowPlayingMovies();


    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '786px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '425px',
        numVisible: 1,
        numScroll: 1
      }
    ];


  }



  loadPopularMovies() {
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

  loadTopRatedMovies() {
    this.movieService.getTopRatedMovies().subscribe({
      next: (response: any) => {
        this.topratedMovies = response.results;
        console.log(response);
      },
      error: (error: any) => {
        console.error('Error fetching top-rated movies:', error);
      },
      complete: () => {
        console.log('Fetch top-rated movies complete');
      }
    });
  }

  loadUpcomingMovies(): void {
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

  loadNowPlayingMovies(): void {
    this.movieService.getNowPlayingMovies().subscribe({
      next: (response: any) => {
        this.nowplayingMovies = response.results;
        console.log(response);
      },
      error: (error: any) => {
        console.error('Error fetching now-playing movies:', error);
      },
      complete: () => {
        console.log('Fetch now-playing movies complete');
      }
    });
  }

  onPopular() {
    // console.log("popular");
    setTimeout(() => {

      this.router.navigate(['/popular']);


    }, 2000);
  }

  onNowplaying() {
    // console.log("popular");
    setTimeout(() => {
      this.router.navigate(['/nowplaying']);
    }, 2000);
  }

  onToprated() {
    //console.log("popular");
    setTimeout(() => {
      this.router.navigate(['/toprated']);
    }, 2000);
  }

  onUpcoming() {
    console.log("popular");
    setTimeout(() => {
      this.router.navigate(['/upcoming']);
    }, 2000);
  }



}
