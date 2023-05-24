import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-treding-details',
  templateUrl: './treding-details.page.html',
  styleUrls: ['./treding-details.page.scss'],
})
export class TredingDetailsPage implements OnInit {
  anime = null;
  characaters: any;
  recomendations: any;
  id : any;
  
  currentPage = 1;
  allCharacters: number = 0;

  constructor(private route: ActivatedRoute, 
    private animeService: AnimeService, 
    public  sanitizer:DomSanitizer,
    private characterService: CharacterServiceService,
    private loadingCtrl: LoadingController) { }


  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id')
    console.log( this.id)
    this.fetchAnimes()

    this.animeService.getAnimeDetails( this.id).subscribe(res=>{
      console.log("This already works")
      this.anime = res      
    })
  }

  async fetchAnimes() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
       
        this.characterService.getCharacters( this.id).subscribe(res =>{         
          loading.dismiss();
          this.characaters = res.data;
          this.allCharacters = this.characaters.length
          console.log(res);      
        });
  }
  
  onChange(event : number){
    this.currentPage = event++;
    this.fetchAnimes();
  }

  }