import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { Album } from '../album/model/album';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getHomePageData(page: number, size: number): Observable<Page<Album>> {
    return this.http.get<Page<Album>>(`/api/?page=${page}&size=${size}`);
  }
}
