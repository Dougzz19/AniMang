import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AnimeService } from 'src/app/services/anime.service';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.page.html',
  styleUrls: ['./animes.page.scss'],
})
export class AnimesPage implements OnInit {
  //Empty array of anime to keep track of the animes
  animes : any;  
  currentPage = 1;
  allAnime: number = 0;
  profile: any;
  genre: any; 
  randomGenre:number;

  //Using loading controller provided by ionic angular that returns a promise
  constructor(private animeService: AnimeService, 
    private avatarService : AvatarService, private loadingCtrl: LoadingController) { 
      this.avatarService.getUserProfile().subscribe((data)=>{
        this.profile = data
        this.randomGenre = Math.floor(Math.random() * this.profile.favGenre.length)+0; 
        this.genre = this.profile.favGenre[this.randomGenre];     
      })
    }

  ngOnInit() {
    this.fetchAnimes();
     console.log(this.fetchAnimes());
  }

  

  async fetchAnimes() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

        //Carrys out simillar process as getting the details of one anime
        this.animeService.getAnimeGenre(this.currentPage,this.genre).subscribe(res =>{         
          loading.dismiss();
          this.animes = res.data;  
          this.allAnime = res.pagination.items.total;
          console.log("Getting Data For genre"+this.genre);
          console.log("All animes"+this.allAnime);
          console.log("Random Number: "+this.randomGenre);         
          console.log(res);      
        });
  }

  onChange(event : number){
    this.currentPage = event++;
    this.fetchAnimes();
  }

}
