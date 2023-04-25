
import { Component,OnInit,  } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAction } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public navCtrl    : NavController,
    private firestore : AngularFirestore
  ) {}
  ngOnInit() {}
  
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['menu']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
