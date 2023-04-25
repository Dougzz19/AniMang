import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor( public authService: AuthService,
    public router: Router,) { }

  ngOnInit() {
  }
  
  loginPage() {
    this.router.navigate(['/login']);
  }

}
