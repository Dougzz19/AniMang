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
  data: Datum[];
}

export interface Datum {
  character:    Character;
  role:         Role;
  favorites:    number;
  voice_actors: VoiceActor[];
}

export interface Character {
  mal_id: number;
  url:    string;
  images: CharacterImages;
  name:   string;
}

export interface CharacterImages {
  jpg:  Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
}

export interface Webp {
  image_url:       string;
  small_image_url: string;
}

export enum Role {
  Main = "Main",
  Supporting = "Supporting",
}

export interface VoiceActor {
  person:   Person;
  language: Language;
}

export enum Language {
  English = "English",
  French = "French",
  German = "German",
  Japanese = "Japanese",
  PortugueseBR = "Portuguese (BR)",
  Spanish = "Spanish",
}

export interface Person {
  mal_id: number;
  url:    string;
  images: PersonImages;
  name:   string;
}

export interface PersonImages {
  jpg: Jpg;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  api = "https://api.jikan.moe/v4/anime/"

  constructor(private http: HttpClient) { }

  getCharacters(id: string): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.api+id+"/characters");
  }

}
