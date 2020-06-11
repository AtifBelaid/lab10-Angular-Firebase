import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit, Input } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Router } from '@angular/router';

/**
 * Add etudiant Component
 */

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  etudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    age:null,
    tel:null,
  }


  constructor(private etudiantService: EtudiantService, private route: Router ) { }

  ngOnInit(): void {}

  /**
   * submit addEtudiant component
   */

  saveEtudiant(){
    this.etudiantService.newEtudiant(this.etudiant)

    return this.route.navigate(['/dashboard']);
  
  }


}
