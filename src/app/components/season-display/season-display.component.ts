import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { AnimeSeasonsService } from 'src/app/services/anime-seasons.service';

@Component({
  selector: 'app-season-display',
  templateUrl: './season-display.component.html',
  styleUrls: ['./season-display.component.scss'],
})
export class SeasonDisplayComponent implements OnInit {
  animes = []
  sub: Subscription
  currentPage = 1;
  seasons= [];
 

  constructor(private sharedService: SharedService, private loadingCtrl: LoadingController, private seasonService: AnimeSeasonsService) { }


  ngOnInit() {
    this.loadAnime();
  }

  ngAfterContentInit() {
    this.sub = this.sharedService.send_data.subscribe(
      data => {
        console.log(data)
        this.animes = data
      }
    )
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
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
}
