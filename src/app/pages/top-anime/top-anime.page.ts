import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.page.html',
  styleUrls: ['./top-anime.page.scss'],
})
export class TopAnimePage implements OnInit {
//Empty array of anime to keep track of the animes
animes : any;  
currentPage = 1;
allAnime: number = 0;
profile: any;
genre: any; 
randomGenre:number;

//Using loading controller provided by ionic angular that returns a promise
constructor(private animeService: AnimeService, 
  private loadingCtrl: LoadingController) { 
  
    
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
      this.animeService.getTopAnime(this.currentPage).subscribe(res =>{         
        loading.dismiss();
        this.animes = res.data;  
        this.allAnime = res.pagination.items.total;        
        console.log(res);      
      });
}

onChange(event : number){
  this.currentPage = event++;
  this.fetchAnimes();
}

}