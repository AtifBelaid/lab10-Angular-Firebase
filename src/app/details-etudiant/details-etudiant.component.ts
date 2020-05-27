import { Etudiant } from './../models/etudiant';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.css']
})
export class DetailsEtudiantComponent implements OnInit {
  id: string;
  etudiant: Etudiant;
  // initialisation des éléments
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

  // Methode pour la suppr
  deletEtudiant(id: string){
    if(confirm('Are you sure to delete this etudiant?')){
      this.etudiantService.deletEtudiant(id);
    this.router.navigate(['/'])

    }
  }

}
