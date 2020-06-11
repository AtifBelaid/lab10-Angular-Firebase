import { AuthService } from './../services/auth.service';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../models/etudiant';

/**
 * Create by Belaid ATIF
 *
 * @export
 * @class ListEtudiantComponent
 * @implements {OnInit}
 */

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})

export class ListEtudiantComponent implements OnInit {
   
   etudiants: Etudiant[];
   searchEtudiants: Etudiant[];

  /**
   * Creates an instance of ListEtudiantComponent.
   * @param {EtudiantService} etudiantService
   * @param {AuthService} authService
   * @memberof ListEtudiantComponent
   */
  constructor(private etudiantService: EtudiantService, private authService: AuthService) { }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(etudiants =>{
      this.etudiants = etudiants;
      this.searchEtudiants = this.etudiants = etudiants;
      console.log(this.etudiants);
    })
 
  }
  
  /**
   * Chercher un etudiant
   *
   * @param {string} query
   * @memberof ListEtudiantComponent
   */

  search(query: string){
   this.searchEtudiants = (query) ? this.etudiants.filter(etudiant => etudiant.nom.toLowerCase().includes(query.toLowerCase()) || etudiant.prenom.toLowerCase().includes(query.toLowerCase())) : this.etudiants;
  }

}
