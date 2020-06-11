import { Devoir } from './../models/devoir';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


  /**
   *
   * @export
   * @class TravauxService
   */

@Injectable({
  providedIn: 'root'
})
export class TravauxService {

  devoirscollection: AngularFirestoreCollection<Devoir>;
  devoirtDoc: AngularFirestoreDocument<Devoir>;

  constructor( private afs: AngularFirestore) {
    this.devoirscollection = this.afs.collection('devoirs');
  }

  /**
   * Gets devoirs
   * @returns devoirs 
   */

  getDevoirs(): Observable<Devoir[]>{
    return this.devoirscollection.snapshotChanges().pipe( 
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Devoir;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

   
  /**
   * newDevoire methode
   *
   * @param {Devoir} devoir
   * @memberof TravauxService
   */

newDevoir(devoir:Devoir){
    this.devoirscollection.add(devoir);
  }

  
  /**
   * deleteDevoir methode by Id
   *
   * @param {string} id
   * @returns
   * @memberof TravauxService
   */

deletDevoir(id: string){
    return this.devoirscollection.doc(id).delete();

  }

}

