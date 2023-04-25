import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';


export interface ApiResult {
  data: Daum[]
}

export interface Daum {
  mal_id: number
  name: string
  url: string
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class AnimeGenreService {

  animeGenresTypes = "https://api.jikan.moe/v4/genres/anime";


  constructor(private http: HttpClient, private auth: Auth, private firestore: Firestore) { }

  getCurrentSeasonAnime(): Observable<ApiResult>{
    return this.http.get<ApiResult>(this.animeGenresTypes);
  }



  async uploadGenre(genre: string) {
		const user = this.auth.currentUser;		

		try {
			const userDocRef = doc(this.firestore, `users/${user.uid}`);
			await updateDoc(userDocRef, {
				favGenre: genre
			});
			return true;
		} catch (e) {
			return null;
		}
	}
}
