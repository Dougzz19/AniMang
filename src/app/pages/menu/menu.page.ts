import { Component, HostListener, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'For you',
      icon: 'home',
      path: '/menu/animes'
    },
    {
      title: 'Trending',
      icon: 'list',
      path: '/menu/top-anime'
    },
    {
      title: 'Profile',
      icon: 'person-circle-outline',
      path: '/menu/profile'
    },
    {
      title: 'Seaons',
      icon: 'information',
      path: '/menu/seasons'
    }
  ];

  title = 'For you';

  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }

  setTitle(title) {
    this.title = title
  }

}
