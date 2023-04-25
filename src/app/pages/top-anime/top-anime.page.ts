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
animes = [];  
currentPage = 1;

//Using loading controller provided by ionic angular that returns a promise
constructor(private animeService: AnimeService, private loadingCtrl: LoadingController) { }

ngOnInit() {
  this.loadAnime();
}

//This function sets up a loading feature
async loadAnime(event? : InfiniteScrollCustomEvent){
  const loading = await this.loadingCtrl.create({
    message: 'Loading..',
    spinner: 'bubbles',
  });
  await loading.present();
  
  //This will only be excuted after the loading is finished 
  //Carrys out simillar process as getting the details of one anime
  this.animeService.getTopAnime(this.currentPage).subscribe(res =>{      
    //When data is recived the loading stops 
    loading.dismiss();
    //Pushing the data in results to our empty array
    this.animes.push(...res.data)  
    console.log("Getting Data");
    console.log(res);

    event?.target.complete();
    if(event){
      event.target.disabled = res.pagination.last_visible_page === this.currentPage;
    }
  });
}

loadMore(event : InfiniteScrollCustomEvent){
  this.currentPage++;
  this.loadAnime(event);
}

}
