import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  postID : string
  post
  heartType: string = "heart-empty"
  
  constructor(private route: ActivatedRoute,  private afstore: AngularFirestore) {
    
   }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.post = this.afstore.doc(`posts/${this.postID}`).valueChanges()
    console.log(this.postID)
    console.log("here"+this.post)
  }

  toggleHeart() {
    this.heartType = this.heartType == "heart" ? "heart-empty":"heart"
  }
}
