import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { watchList } from '../shared/watch-list';
import { Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

export interface ApiResult {
  pagination: Pagination;
  data:       Datum[];
}

export interface Datum {
  year:    number;
  seasons: Season[];
}

export enum Season {
  Fall = "fall",
  Spring = "spring",
  Summer = "summer",
  Winter = "winter",
}

export interface Pagination {
  last_visible_page: number;
  has_next_page:     boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AnimeSeasonsService {

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getSeasons = "https://api.jikan.moe/v4/seasons"

  
  getSeasonList(pageNum = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.getSeasons+"?page="+pageNum );
  }




}