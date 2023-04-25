import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Review {
  id?: string;
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private firestore: Firestore) { }

  getNotes(): Observable<Review[]> {
    const notesRef = collection(this.firestore, 'review');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Review[]>;
  }

  getNoteById(id): Observable<Review> {
    const noteDocRef = doc(this.firestore, `review/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Review>;
  }

  addNote(review: Review) {
    const notesRef = collection(this.firestore, 'review');
    return addDoc(notesRef, review);
  }

  deleteNote(review: Review) {
    const noteDocRef = doc(this.firestore, `review/${review.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(review: Review ) {
    const noteDocRef = doc(this.firestore, `review/${review.id}`);
    return updateDoc(noteDocRef, { title: review.title, text: review.text });
  }
}