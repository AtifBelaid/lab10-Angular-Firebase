import { Etudiant } from './../models/etudiant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

  
  /**
   *
   * @export
   * @class EtudiantService
   */

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiantscollection: AngularFirestoreCollection<Etudiant>;
  etudiantDoc: AngularFirestoreDocument<Etudiant>;
   
  constructor(private afs: AngularFirestore) { 
  
     this.etudiantscollection = this.afs.collection('etudiants');

  }


  // (8) Create Methode pour utiliser it en AppCompenent + return This.etudiant qui rapport ls donner
    getEtudiants(): Observable<Etudiant[]>{
      return this.etudiantscollection.snapshotChanges().pipe( 
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Etudiant;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
 
    }

    newEtudiant(etudiant:Etudiant){
      this.etudiantscollection.add(etudiant);
    }

    /**
     *Get etudiant by Id
     *
     * @param {string} id
     * @returns {Observable<Etudiant>}
     * @memberof EtudiantService
     */

    getEtudiant(id: string): Observable<Etudiant>{
     return this.etudiantscollection.doc(id).valueChanges();

    }

      
    /**
     * Update etudiant
     * 
     * @param {Etudiant} etudiant
     * @returns
     * @memberof EtudiantService
     */

    updateEtudiant(etudiant: Etudiant){
      return this.etudiantscollection.doc(etudiant.id).update(etudiant);

    }

    
    /**
     *  Delete etudiant
     * 
     * @param {string} id
     * @returns
     * @memberof EtudiantService
     */

    deletEtudiant(id: string){
      return this.etudiantscollection.doc(id).delete();

    }
    

}
