import { Injectable } from '@angular/core';
import { watchList } from '../shared/watch-list';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  WacthListRef!: AngularFireList<any>;
  ListRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createWatchList(lst: watchList) {
    return this.WacthListRef.push({
      name: lst.name,
      studio: lst.studio,
      genre: lst.genre,
    });
  }
  // Get Single
  getSeries(id: string) {
    this.ListRef = this.db.object('/make-list/' + id);
    return this.ListRef;
  }
  // Get List
  getList() {
    this.WacthListRef = this.db.list('/make-list');
    return this.WacthListRef;
  }
  // Update
  updateList(id, lst: watchList) {
    return this.ListRef.update({
      name: lst.name,
      studio: lst.studio,
      genre: lst.genre,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.ListRef = this.db.object('/appointment/' + id);
    this.ListRef.remove();
  }
}