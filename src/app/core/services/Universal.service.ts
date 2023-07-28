import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlApi } from "../constants/AllInfPage";



@Injectable({
    providedIn: 'root',
  })
  export class UniversalService {
    urlBase:string = UrlApi;
    constructor(
      private http: HttpClient) {}

  readCharacterbyPage(page:number): Observable<any> {
    return this.http.get(this.urlBase + `api/character/?page=${page}`);
  }
  readSpecificationsCharacter(id:number):Observable<any> {
    return this.http.get(this.urlBase + `api/character/${id}`);
  }
  readLocationbyPage(page:number): Observable<any> {
    return this.http.get(this.urlBase + `api/location/?page=${page}`);
  }
  readEpisodebyPage(page:number): Observable<any> {
    return this.http.get(this.urlBase + `api/episode/?page=${page}`);
  }


  }
