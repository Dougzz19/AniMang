import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { AvatarService } from 'src/app/services/avatar.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Plugins} from '@capacitor/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { arrayUnion, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import{HttpClient} from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.page.html',
  styleUrls: ['./uploads.page.scss'],
})
export class UploadsPage implements OnInit {

  imageURL: any
  desc: any
  profile: any

  @ViewChild('fileButton') fileButton
  name: any;

  constructor(
  
    private avatarService : AvatarService,

    private http : HttpClient,
    private afstore: AngularFirestore,
    private router: Router
    
   ) {
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data['uid']
      this.name = data['displayName'];

    })
   }

  ngOnInit() {
  }

uploadFile(){
  this.fileButton.nativeElement.click()

}

  createPost(){
    const image = this.imageURL
    const desc = this.desc

    this.afstore.doc(`users/${this.profile}`).update({
      posts: arrayUnion({image})
    })

    this.afstore.doc(`posts/${image}`).set({
      posts: arrayUnion({desc,
      author: this.name,
      likes: []
    })
    })


    this.router.navigate(['/menu/profile']);

  }

  fileChanged(event: Event) {
    let files = (event.target as any).files;
    
    const data = new FormData()
    data.append('file',files[0])
    data.append('UPLOADCARE_STORE','1')
    data.append('UPLOADCARE_PUB_KEY','1d4871ef92beb8c1583f' )

    this.http.post('https://upload.uploadcare.com/base/', data ).subscribe(
      event => {
        console.log(event);
        this.imageURL = JSON.parse(JSON.stringify(event)).file;

      }
    )
    }
}
