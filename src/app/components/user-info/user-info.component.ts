import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AnimeGenreService } from 'src/app/services/anime-genre.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  genres = []; 
  genreSelected : [];

  constructor(private modalController: ModalController, 
    private genreService: AnimeGenreService,
    private loadingCtrl: LoadingController,
    private alertCtrl : AlertController  ) { }

  ngOnInit() {
    this.loadGenres();
  }

    closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }

  async loadGenres(){
    this.genreService.getCurrentSeasonAnime().subscribe(res=>{
      this.genres.push(...res.data)
    })
  }

  selectedGenre(event: any){

    this.genreSelected = event.target.value
    console.log("Genre") 
    console.log(this.genreSelected) 
  }

  async updateGenre(genreSelected){
      if(genreSelected){
      const loading = await this.loadingCtrl.create();
      await loading.present();

      const result = await this.genreService.uploadGenre(genreSelected);
      console.log("Hey there:"+genreSelected)

      loading.dismiss();

      if (!result) {
        const alert = await this.alertCtrl.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your genre.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }



}
