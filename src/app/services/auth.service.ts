import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

 /**
  * Authentification service
  */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth) { }
  
  /**
   *
   * Logine service
   * @param {string} email
   * @param {string} password
   * @returns
   * @memberof AuthService
   */

login(email:string, password:string){
    return new Promise((resolve, reject) =>{
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userData) => resolve(userData), (error) => reject(error))

    })
     
  }

  
  /**
   *
   * Register service
   * @param {string} email
   * @param {string} password
   * @returns
   * @memberof AuthService
   */  

register(email:string, password:string){
    return new Promise((resolve, reject) =>{
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userData) => resolve(userData), (error) => reject(error))

    })
     
  }

    /**
     * Methode pour ne pas afficher la page d'authentification c'est Je suis deja Authentifier
     */

getAuth(){
  return this.afAuth.authState.pipe(map(auth=>auth));

  }

    
    /**
     *
     * Logine with google account
     * @returns
     * @memberof AuthService
     */
onLoginWithGo(){
  return new Promise((resolve, reject) =>{
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((userData) => resolve(userData), (error) => reject(error))

  })
    
}

  /**
   * logOut methode
   */

logOut(){
    this.afAuth.signOut();
  }

 
}
