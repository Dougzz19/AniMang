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
  mal_id:          number;
  url:             string;
  title:           string;
  date:            Date;
  author_username: string;
  author_url:      string;
  forum_url:       string;
  images:          Images;
  comments:        number;
  excerpt:         string;
}

export interface Images {
  jpg: Jpg;
}

export interface Jpg {
  image_url: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page:     boolean;
}


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api = "https://api.jikan.moe/v4/anime/"

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getNews(pageNum = 1, id: string): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.api+id+"/news");
  }
}
