import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GistsApiService {

  private BASE_URL: string = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) { }

  public getPublicGistsForUsername(username: string): Observable<any>{
    let url: string = this.BASE_URL + 'users/'+ username + '/gists';
    return this.httpClient.get(url);
  }

  public getGistForks(forks_url: string): Observable<any[]> {
    return this.httpClient.get<any[]>(forks_url);
  }


}
