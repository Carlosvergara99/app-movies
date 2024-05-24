import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Movie, Result } from '../interfaces/movie.interface';
import {  BehaviorSubject, Observable,catchError,map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})

export class MovieService {

    constructor(private http: HttpClient) {}

    public baseUrl =environment.apiUrl
    private apiKey =environment.apiKey
    private dataSource = new BehaviorSubject<Result[]>([]);
    public  currentMovies = this.dataSource.asObservable();
   
     changeMovie(movie:Result[]) {
         return this.dataSource.next(movie);
    }
    
     moviesPopular() : Observable<Result[]> {
        const params = new HttpParams()
             .set('api_key',this.apiKey)
                
        return this.http.get<Movie>(`${this.baseUrl}/movie/popular?${params}`)
                .pipe(
                    map(res => res.results),
                    tap((res)=> this.changeMovie(res)),
                )
    }


    movieById (id:number  ) :Observable<Result |null  >{

        const params = new HttpParams()
                .set('api_key',this.apiKey)
        
         return this.http.get<Result>(`${this.baseUrl}/movie/${id}?${params}`)
           .pipe(
                catchError(() => of( null)),
           )
    }

    searchMovie(query:string): Observable<Result[]|null > {

        const params = new HttpParams()
                  .set('query',query)
                  .set('api_key',this.apiKey)

        return this.http.get<Movie >(`${this.baseUrl}/search/movie?${params}`)
                 .pipe(
                    map(res => res.results),
                    tap((res)=> this.changeMovie(res)),
                    catchError(() => of( null)),
                 )
    }
    
    
}