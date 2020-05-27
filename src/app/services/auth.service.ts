import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth) { }

  login(email:string, password:string){
    return new Promise((resolve, reject) =>{
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userData) => resolve(userData), (error) => reject(error))

    })
     
  }

  register(email:string, password:string){
    return new Promise((resolve, reject) =>{
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userData) => resolve(userData), (error) => reject(error))

    })
     
  }

  //Methode pour ne pas afficher la page d'authentification c'est Je suis deja Authentifier
   getAuth(){
     return this.afAuth.authState.pipe(map(auth=>auth));

  }

  onLoginWithGo(){
    return new Promise((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((userData) => resolve(userData), (error) => reject(error))

    })

  
     
  }

  logOut(){
    this.afAuth.signOut();
  }

 
}
