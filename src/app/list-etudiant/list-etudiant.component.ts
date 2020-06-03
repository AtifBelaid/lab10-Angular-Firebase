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
   searchEtudiants: Etudiant[];

  // (9) Injecter new service
  constructor(private etudiantService: EtudiantService, private authService: AuthService) { }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(etudiants =>{
      // (12) affecter au variable etudiants le retour de etudiant =>
      this.searchEtudiants = this.etudiants = etudiants;
      // (13) Afficher le contenue au console log
      console.log(this.etudiants);
    })
 
  }

  search(query: string){
    this.searchEtudiants = (query) ? this.etudiants.filter(etudiant => etudiant.nom.toLowerCase().includes(query.toLowerCase()) || etudiant.prenom.toLowerCase().includes(query.toLowerCase())) : this.etudiants;


  }

}
