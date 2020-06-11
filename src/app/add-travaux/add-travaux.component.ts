import { Router } from '@angular/router';
import { TravauxService } from './../services/travaux.service';
import { Component, OnInit } from '@angular/core';
import { Devoir } from '../models/devoir';

/**
 * Add travauc component
 */

@Component({
  selector: 'app-add-travaux',
  templateUrl: './add-travaux.component.html',
  styleUrls: ['./add-travaux.component.css']
})
export class AddTravauxComponent implements OnInit {

  devoir: Devoir = {
    title:'',
    description:'',
    ytbUrl:'',
  }



  constructor(private travauxService: TravauxService, private route: Router) { }

  ngOnInit(): void {
  }

  /**
   * submit devoir component
   */


  saveDevoir(){
    this.travauxService.newDevoir(this.devoir)

    return this.route.navigate(['/travaux']);
  
  }




}
