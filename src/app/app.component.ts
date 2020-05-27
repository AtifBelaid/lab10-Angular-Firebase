import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab10-Angular';

   // variable de type Observable pour recuperer ls donner
   etudiants: Observable<any[]>;


  constructor(private db: AngularFireDatabase) {

    //recuperer ls donner de DB
    this.etudiants = db.list('etudiants').valueChanges();
  }

   //Methode pour ajouter au DB
  add(data) {
    this.db.list('etudiants').push({
      nom: "rachid",
      prenom: "aknbos",   
    })
  }
  
}
