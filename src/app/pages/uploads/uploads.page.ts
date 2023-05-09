import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { AvatarService } from 'src/app/services/avatar.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Plugins} from '@capacitor/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { arrayUnion, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.page.html',
  styleUrls: ['./uploads.page.scss'],
})
export class UploadsPage implements OnInit {
  photo : any;
  name: any
  desc: string
  profile: any;
  picImage:any;
  imageUpload: AngularFireUploadTask;
  

  constructor(private modalController: ModalController,
    private db : AngularFirestore,
    private avatarService : AvatarService,
    private storage : AngularFireStorage,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private toastCtrl: ToastController ,
    private alertCtrl : AlertController  
   ) {
    this.plt = plt;
      this.avatarService.getUserProfile().subscribe((data)=>{
        this.profile = data;
        this.name = this.profile['displayName'];
        console.log(this.profile['displayName'])
      })
    }

  ngOnInit() {
  }

  async openOptionSelection() {
    const modal = await this.modalController.create({
      component: ProfilePhotoComponent,
      cssClass: 'transparent-modal'
    });

    modal.onDidDismiss()
    .then(res => {
      console.log("result:"+res.data);
      if (res.role !== 'backdrop') {
        this.takePicture(res.data);
      }
    });
    return await modal.present();  
}

async takePicture(type) {
  console.log("Type is:"+type)
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource[type]
    });
    this.photo = image;
    console.log(this.photo);

    if (this.photo) {
     this.picImage = this.photo
			const loading = await this.loadingCtrl.create();
			await loading.present();

			const result = await this.avatarService.uploadPost(image,this.desc);

			loading.dismiss();

			if (!result) {
				const alert = await this.alertCtrl.create({
					header: 'Upload failed',
					message: 'There was a problem uploading your post.',
					buttons: ['OK']
				});
				await alert.present();
			}
		}
  } 

}
