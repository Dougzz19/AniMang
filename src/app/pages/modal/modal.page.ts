import { Component, Input, OnInit } from '@angular/core';
import { Review, ReviewService } from 'src/app/services/review.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string;
  review: Review = null;

  constructor(private reviewService: ReviewService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.reviewService.getNoteById(this.id).subscribe(res => {
      this.review = res;
    });
  }

  async deleteNote() {
    await this.reviewService.deleteNote(this.review)
    this.modalCtrl.dismiss();
  }

  async updateNote() {
    await this.reviewService.updateNote(this.review );
    const toast = await this.toastCtrl.create({
      message: 'Note updated!.',
      duration: 2000
    });
    toast.present();

  }
}