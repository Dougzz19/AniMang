import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/users';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  private userCollection: AngularFirestoreCollection<User>;
  
  constructor(
    public authService: AuthService,
    public afStore: AngularFirestore,
    public router: Router
  ) { }
  ngOnInit(){}
 
 
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      console.log("User id after reigstration = "+res.user.uid);
      const userData: User = {
        uid: res.user.uid,
        imageUrl: "",
        displayName: res.user.displayName,
        email: res.user.email,	
        favAnime: "",
        favManga: "",
        favGenre: "Award Winning",
        emailVerified: res.user.emailVerified
      };
      this.authService.SendVerificationMail()
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
		    `users/${res.user.uid}`
	   );
     userRef.set(userData, {
		merge: true,
	  });
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}
}