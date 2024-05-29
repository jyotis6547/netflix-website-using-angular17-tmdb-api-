import { Component, SimpleChanges, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IMovies } from '../../Interface/IMovies';
import { tmdbConfig } from '../../service/config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../service/movies.service';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import { FullhomeComponent } from '../fullhome/fullhome.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CarouselModule, ButtonModule, TagModule, FullhomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bannerMovie!: IMovies;
  tmdbConfig = tmdbConfig;
  trailers: any[] = [];
  youtubeVideo: any[] = [];
  responsiveOptions: any[] | undefined;
  adBlockEnabled: boolean = false;
  videoUrl: SafeResourceUrl | undefined;
  isVideoLoaded: boolean = false;

  constructor(public domSanitizer: DomSanitizer, private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.adBlockEnabled = this.detectAdBlocker();

    if (this.adBlockEnabled) {
      console.warn('Ad blocker detected. Videos might not play correctly.');
      alert('Please disable your ad blocker to view the video.');
    } else {
      this.loadBannerMovie();
    }

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 0
      },
      {
        breakpoint: '1220px',
        numVisible: 5,
        numScroll: 0
      },
      {
        breakpoint: '1100px',
        numVisible: 5,
        numScroll: 0
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['adBlockEnabled'] || changes['bannerMovie']) {
      this.adBlockEnabled = this.detectAdBlocker();

      if (this.adBlockEnabled) {
        console.warn('Ad blocker detected. Videos might not play correctly.');
        alert('Please disable your ad blocker to view the video.');
      } else {
        this.loadBannerMovie();
      }
    }
  }

  detectAdBlocker(): boolean {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    const adBlockEnabled = testAd.offsetHeight === 0;
    document.body.removeChild(testAd);
    return adBlockEnabled;
  }

  loadBannerMovie(): void {
    this.movieService.getUpcomingMovies().subscribe({
      next: (result: any) => {
        const trailers = result.results;
        this.bannerMovie = trailers[0];
        this.movieService.getMoviesVideos(this.bannerMovie.id).subscribe({
          next: (res: any) => {
            const youtubeVideo = res.results.find((x: any) => x.site === 'YouTube');
            if (youtubeVideo) {
              this.bannerMovie.videoKey = youtubeVideo.key;
              this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
                `https://www.youtube.com/embed/${this.bannerMovie.videoKey}?autoplay=1&mute=1&showinfo=0&controls=0`
              );
              this.isVideoLoaded = true;
            }
          },
          error: (error) => {
            console.error('Error fetching movie trailer:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching top-rated movies:', error);
      }
    });
  }

}
