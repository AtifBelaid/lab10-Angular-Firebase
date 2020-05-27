import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './../services/etudiant.service';
import { Etudiant } from '../models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';


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

  ngOnInit(): void {
    // récupérer Id
    this.id = this.route.snapshot.params['id'];

    // récupérer Etudiant
    this.etudiantService.getEtudiant(this.id).subscribe(etudiant =>{
      this.etudiant = etudiant;
      console.log(this.etudiant)
    })
  }
  // Methode pour Update Etudiant
  saveEtudiant(){
    this.etudiant.id = this.id;
    this.etudiantService.updateEtudiant(this.etudiant);
    //Redireger vers la liste des Etudiants
    this.router.navigate(['/etudiant/', this.id])
  }


}
