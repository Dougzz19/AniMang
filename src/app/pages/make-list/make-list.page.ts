import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { WatchListService } from 'src/app/services/watch-list.service';
@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.page.html',
  styleUrls: ['./make-list.page.scss'],
})
export class MakeListPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private lstService: WatchListService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      studio: [''],
      genre: ['']
    })
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.lstService.createWatchList(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/animes']);
      })
        .catch(error => console.log(error));
    }
  }
}