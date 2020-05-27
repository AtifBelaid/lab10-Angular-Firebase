import { Etudiant } from './../models/etudiant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

   // (3) Create variable
  etudiantscollection: AngularFirestoreCollection<Etudiant>;
  etudiantDoc: AngularFirestoreDocument<Etudiant>;
   // (1) Inject AngularFirsStore
  constructor(private afs: AngularFirestore) { 
  
    // (4) UTILISATION de etudiantscollection = (2)Recuprer la list des Etudiant from fireStor 
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

    //Get etudiant from DB
    getEtudiant(id: string): Observable<Etudiant>{
     return this.etudiantscollection.doc(id).valueChanges();

    }

    updateEtudiant(etudiant: Etudiant){
      return this.etudiantscollection.doc(etudiant.id).update(etudiant);

    }

    deletEtudiant(id: string){
      return this.etudiantscollection.doc(id).delete();

    }
    

}