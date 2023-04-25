
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //send_data = new Subject<any>();
  @Output() send_data = new EventEmitter<any>()

  constructor() { }
}