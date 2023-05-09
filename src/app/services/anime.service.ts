import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { watchList } from '../shared/watch-list';
import { Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

//Interfaces that were imported using a third party application
//Takes in Json and returns it as typescript. These interfaces make it easier
//to refer to the data and see the diffrent types.

export interface ApiResults {
  data: Datum[];
}

export interface Datum {
  entry: Entry;
  url:   string;
  votes: number;
}

export interface Entry {
  mal_id: number;
  url:    string;
  images: { [key: string]: Image };
  title:  string;
}

export interface Image {
  image_url:       string;
  small_image_url: string;
  large_image_url: string;
}


//
export interface ApiResult {
  data: Daum[]
  pagination: Pagination
}

export interface Pagination {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: Items
}

export interface Items {
  count: number
  total: number
  per_page: number
}

export interface Daum {
  mal_id: number
  url: string
  images: Images
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english?: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes?: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score?: number
  scored_by?: number
  rank?: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background?: string
  season: string
  year: number
  broadcast: Broadcast
  producers: Producer[]
  licensors: Licensor[]
  studios: Studio[]
  genres: Genre[]
  explicit_genres: any[]
  themes: Theme[]
  demographics: Demographic[]
}

export interface Images {
  jpg: Jpg
  webp: Webp
}

export interface Jpg {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Webp {
  image_url: string
  small_image_url: string
  large_image_url: string
}

export interface Trailer {
  youtube_id: string
  url: string
  embed_url: string
  images: Images2
}

export interface Images2 {
  image_url: string
  small_image_url: string
  medium_image_url: string
  large_image_url: string
  maximum_image_url: string
}

export interface Title {
  type: string
  title: string
}

export interface Aired {
  from: string
  to: any
  prop: Prop
  string: string
}

export interface Prop {
  from: From
  to: To
}

export interface From {
  day: number
  month: number
  year: number
}

export interface To {
  day: any
  month: any
  year: any
}

export interface Broadcast {
  day: string
  time: string
  timezone: string
  string: string
}

export interface Producer {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Licensor {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Studio {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Genre {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Theme {
  mal_id: number
  type: string
  name: string
  url: string
}

export interface Demographic {
  mal_id: number
  type: string
  name: string
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  //This api returns all the anime that are airing this fall
  animeSeasonApi = "https://api.jikan.moe/v4/seasons/";
  
  //This call requires an ID to find a specific anime 
  animeIdApi = "https://api.jikan.moe/v4/anime/"

  animeGenre = "https://api.jikan.moe/v4/anime?genres=";

  api = "https://api.jikan.moe/v4/"

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getCurrentSeasonAnime(pageNum = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.animeSeasonApi+"now"+"?page="+pageNum );
  }

  getTopAnime(pageNum = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.api+"top/anime"+"?page="+pageNum );
  }

  getSeasonAnime(pageNum = 1, year: string, season : string): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.animeSeasonApi+year+"/"+season+"?page="+pageNum );
  }

  getAnimeGenre(pageNum = 1, genre: string): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.animeGenre+genre+"&page="+pageNum);
  }

  getAnimeDetails(id: string){
    return this.http.get(this.animeIdApi+id );
  }

  getRelatedAnime(id: string): Observable<ApiResults>{
    return this.http.get<ApiResults>(this.animeIdApi+id+"/recommendations");
  }
}
