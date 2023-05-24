import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import { NewsService } from 'src/app/services/news.service';
import {DomSanitizer} from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news = null;  
  recomendations: any;
  id : any;
  
  currentPage = 1;
  allNews: number = 0;

  constructor(private route: ActivatedRoute, 
    private animeService: AnimeService, 
    public  sanitizer:DomSanitizer,
    private router: Router,
    private newsService: NewsService,
    private loadingCtrl: LoadingController) { }


  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id')
    console.log( this.id)
    this.fetchAnimes()
  }

  async fetchAnimes() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
       
    this.newsService.getNews( this.currentPage,this.id).subscribe(res=>{
          loading.dismiss();
          this.news = res.data;
          this.allNews = this.news.length
          console.log(res);      
        });
  }
  
  onChange(event : number){
    this.currentPage = event++;
    this.fetchAnimes();
  }

}
