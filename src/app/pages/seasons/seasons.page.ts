import { Component, Input, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeSeasonsService } from 'src/app/services/anime-seasons.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.page.html',
  styleUrls: ['./seasons.page.scss'],
})
export class SeasonsPage implements OnInit {

    seasons = [];  
    animes = []
    currentPage = 1;
    allAnime: number = 0;

     airSeason: string;
     airYear: string;

    constructor(private animeService: AnimeService, private seasonService: AnimeSeasonsService,private loadingCtrl: LoadingController
      , private sharedService: SharedService) { }

 
  ngOnInit() {
    this.loadAnime();    
  }


  selectedYear(event: any){
    this.airSeason = event.target.value
    console.log("Season") 
    console.log(this.airSeason) 
  }

  
  handleChange(e) {
    this.airYear = e.detail.value;
    console.log("Year") 
    ///console.log(this.airYear) 
  }
  
  seasonSearch(airYear, airSeason){

    this.animeService.getSeasonAnime(this.currentPage, airYear, airSeason ).subscribe(res =>{              
      this.animes = res.data;
      console.log("Getting data") 
      console.log(this.animes)     
    })

 
  }

  //This function sets up a loading feature
  async loadAnime(event? : InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    

    this.seasonService.getSeasonList(this.currentPage).subscribe(res =>{          
      loading.dismiss();
      this.seasons.push(...res.data)  
     
    });
    
  }
  
  onChange(event : number){
    this.currentPage = event++;
    this.loadAnime();
  }

}
