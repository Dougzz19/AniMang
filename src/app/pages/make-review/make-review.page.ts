import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Review, ReviewService } from 'src/app/services/review.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-make-review',
  templateUrl: './make-review.page.html',
  styleUrls: ['./make-review.page.scss'],
})
export class MakeReviewPage implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.reviewService.getNotes().subscribe(res => {
      this.reviews = res;
      this.cd.detectChanges();
    });
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  async  addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Add Review',
      inputs: [
        {
          name: 'title',
          placeholder: 'Enter Title',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Leave Review',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            this.reviewService.addNote({ text: res.text, title: res.title });
          }
        }
      ]
    });
 
    await alert.present();
  }

  async openNote(review: Review) {
    const modal = await this.
    modalCtrl.create({
      component: ModalPage,
      componentProps: { id: review.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });

    await modal.present();
  }
}