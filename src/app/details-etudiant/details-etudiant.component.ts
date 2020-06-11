import { Etudiant } from './../models/etudiant';
import { EtudiantService } from './../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

  /**
   * details etudiant
   */

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.css']
})
export class DetailsEtudiantComponent implements OnInit {
    id: string;
    etudiant: Etudiant;

    /**
     * initialisation des éléments
     */

  constructor(private etudiantService: EtudiantService, private route: ActivatedRoute, private router: Router) { }

    /**
     * Recuperation Id etudiant 
     * @memberof DetailsEtudiantComponent
     */

ngOnInit(): void {

      this.id = this.route.snapshot.params['id'];

      this.etudiantService.getEtudiant(this.id).subscribe(etudiant =>{
        this.etudiant = etudiant;
        console.log(this.etudiant)
    })
  }

    /**
     *
     * @param {string} id
     * @memberof DetailsEtudiantComponent
     */

  deletEtudiant(id: string){
    if(confirm('Are you sure to delete this etudiant?')){
      this.etudiantService.deletEtudiant(id);
    this.router.navigate(['/'])

    }
  }

}
