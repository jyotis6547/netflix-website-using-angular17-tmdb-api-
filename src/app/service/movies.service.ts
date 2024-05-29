import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs';
import { tmdbConfig } from './config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + tmdbConfig.accessToken);
    return headers;
  }

  getPopularMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }


  getNowPlayingMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/now_playing`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }


  getTopRatedMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/top_rated`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }


  getUpcomingMovies() {
    const url = `${this.apiUrl}/movie/upcoming`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getMovieTrailer(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/videos?api_key=${tmdbConfig.apiKey}`);
  }

  getMoviesVideos(movieId: number) {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/videos?api_key=${tmdbConfig.apiKey}`);
  }

}
