import { AuthService } from './../services/auth.service';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit, Input } from '@angular/core';
import { Etudiant } from '../models/etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  // (1)Create DataBinding
  etudiant: Etudiant = {
    id:'',
    nom:'',
    prenom:'',
    email:'',
    age:null,
    tel:null,
    user:'',
  }


  constructor(private etudiantService: EtudiantService,private authService: AuthService, private route: Router ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      this.etudiant.user = auth.uid
    })


  }

  saveEtudiant(){
    this.etudiantService.newEtudiant(this.etudiant)

    return this.route.navigate(['/']);
  
  }


}
