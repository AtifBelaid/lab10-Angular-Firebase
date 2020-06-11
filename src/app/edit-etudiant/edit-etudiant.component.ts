import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './../services/etudiant.service';
import { Etudiant } from '../models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Edit etudiant component
 */

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  id: string;
  etudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    age:null,
    tel:null
  }

  constructor(private etudiantService: EtudiantService, private route: ActivatedRoute, private router: Router) { }

  
  /**
   * Recupere etidiant Id
   * @memberof EditEtudiantComponent
   */

  ngOnInit(): void {
    // récupérer Id
    this.id = this.route.snapshot.params['id'];

    // récupérer Etudiant
    this.etudiantService.getEtudiant(this.id).subscribe(etudiant =>{
      this.etudiant = etudiant;
      console.log(this.etudiant)
    })
  }

  /**
   * Update etudiant methode
   */

  saveEtudiant(){
    this.etudiant.id = this.id;
    this.etudiantService.updateEtudiant(this.etudiant);
    this.router.navigate(['/etudiant/', this.id])
  }


}
