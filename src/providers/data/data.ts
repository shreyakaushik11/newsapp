import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
export interface User { displayName:string, photoUrl:string, email:string};
@Injectable()
export class DataProvider {

  name
  photo
  emailid
  arr=[]
  sign =false
  userCollection: AngularFirestoreCollection<User>;
  categoryArr=["sports","technology","wildlife","entertainment","business"]

  constructor(public http: HttpClient,private afs: AngularFirestore,public afAuth:AngularFireAuth) {
    console.log('Hello DataProvider Provider');
    this.userCollection = afs.collection<User>('users');
    
    afAuth.auth.onAuthStateChanged( user => {
      if (user) {
        this.name = user.displayName;
        // this.email = user.email;
        this.sign = true
        console.log(this.sign);
        // console.log(this.photoUrl);
        // this.userCollection.add(this.userData)
      } else {
        console.log("There's no user here");
      }
  });
  }
}