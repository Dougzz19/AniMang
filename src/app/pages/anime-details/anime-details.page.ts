//Imorted components from diffrent classes and packages
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.page.html',
  styleUrls: ['./anime-details.page.scss'],
})
export class AnimeDetailsPage implements OnInit {
  //Anime is set to null to take in the data that is being retreived from the 
  //service.
  anime = null;
  characaters: any;
  recomendations: any;
  id : any;
  showToAdd = null;
  currentPage = 1;
  allCharacters: number = 0;
  //In the consturctor it contains a variable route which is of type ActivatedRoute
  //what this dose is that it keeps track of the id of a singular anime and displays
  //the data as fromatted on the anime details html page for that anime with the 
  //same id.

  //The animeService variable is of type AnimeService which is our service component
  //this has all the information on the methods being used to make the specific API calls
  constructor(private route: ActivatedRoute, 
    private animeService: AnimeService, 
    public  sanitizer:DomSanitizer,
    private characterService: CharacterServiceService,
    private loadingCtrl: LoadingController) { }


  ngOnInit() {
    //Variable ID is assigned the value of data that corrisponds to the data
    //of the returned API response with the correct id
    this.id  = this.route.snapshot.paramMap.get('id')
    console.log( this.id)
    this.fetchAnimes()
    //Calling the getAnimeDetails method from our anime service and using the
    //varible id as a parameter to get details of a specific anime.
    //because the data we are getting is an observable we must subscribe to it
    //and place the data from our result into the anime varible which is curretly at
    //null
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

        //Carrys out simillar process as getting the details of one anime
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

 
