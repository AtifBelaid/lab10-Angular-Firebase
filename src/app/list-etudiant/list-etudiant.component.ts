import { AuthService } from './../services/auth.service';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
   // (11) Create variable
   etudiants: Etudiant[];

  // (9) Injecter new service
  constructor(private etudiantService: EtudiantService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      this.etudiantService.getEtudiants(auth.uid).subscribe(etudiants =>{
        // (12) affecter au variable etudiants le retour de etudiant =>
        this.etudiants = etudiants;
        // (13) Afficher le contenue au console log
        console.log(this.etudiants);
  
        
      })

    })
   
  }

}
