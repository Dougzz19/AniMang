import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  id?: string;
  username: string;
  bio: string;
  favAnime: string;
  favManga: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  getUsers(): Observable<User[]> {
    const notesRef = collection(this.firestore, 'user');
    return collectionData(notesRef, { idField: 'id'}) as Observable<User[]>;
  }

  getUserById(id): Observable<User> {
    const noteDocRef = doc(this.firestore, `user/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<User>;
  }

  addDefaultUserInfo(user: User) {
    const notesRef = collection(this.firestore, 'user');
    return addDoc(notesRef, user);    
  }

  deleteUser(user: User) {
    const noteDocRef = doc(this.firestore, `user/${user.id}`);
    return deleteDoc(noteDocRef);
  }

  updateUserInfo(user: User ) {
    const noteDocRef = doc(this.firestore, `user/${user.id}`);
    return updateDoc(noteDocRef, { username: user.username, bio: user.bio, favAnime: user.favAnime, favManga: user.favManga});
  }
}
