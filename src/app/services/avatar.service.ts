import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { arrayUnion, doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
	providedIn: 'root'
})
export class AvatarService {
	constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) {}

	getUserProfile() {
		const user = this.auth.currentUser;
		const userDocRef = doc(this.firestore, `users/${user.uid}`);
		return docData(userDocRef, { idField: 'id' });
	}

	async uploadImage(cameraFile: Photo) {
		const user = this.auth.currentUser;
		const path = `uploads/${user.uid}/profile.webp`;
		const storageRef = ref(this.storage, path);

		try {
			await uploadString(storageRef, cameraFile.base64String, 'base64');

			const userImage = await getDownloadURL(storageRef);

			const userDocRef = doc(this.firestore, `users/${user.uid}`);
			await updateDoc(userDocRef, {
				imageUrl: userImage
			});
			return true;
		} catch (e) {
			return null;
		}
	}

	async uploadPost(cameraFile: Photo, desc: String) {
		const randomId = Math.random()
		.toString(36)
		.substring(2, 8);
		
		const user = this.auth.currentUser;
		const path = `uploads/${user.uid}/${new Date().getTime()}_${randomId}`;
		const storageRef = ref(this.storage, path);

		try {
			await uploadString(storageRef, cameraFile.base64String, 'base64');

			const postImage = await getDownloadURL(storageRef);

			const userDocRef = doc(this.firestore, `users/${user.uid}`);
			await updateDoc(userDocRef, {
				posts: arrayUnion({
					postImage,
					desc,
					likes: []
				})
			});
			return true;
		} catch (e) {
			return null;
		}
	}

	
}