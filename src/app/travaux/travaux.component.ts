import { Devoir } from './../models/devoir';
import { Component, OnInit } from '@angular/core';
import { TravauxService } from '../services/travaux.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.css']
})
export class TravauxComponent implements OnInit {

  id: string;
  devoirs: Devoir[];

  constructor(private travauxService: TravauxService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // récupérer Id
    this.id = this.route.snapshot.params['id'];

    this.travauxService.getDevoirs().subscribe(devoirs =>{
      // (12) affecter au variable etudiants le retour de etudiant =>
      this.devoirs = devoirs;
      // (13) Afficher le contenue au console log
      console.log(this.devoirs);
    })
  }

  getYtbEmbedUrl(ytbUrl: string): string {
    let videoUrl = ytbUrl.split('=')[1];
    // console.log("video Url id: ", videoUrl);
    videoUrl = "https://www.youtube.com/embed/" + videoUrl;
    // console.log("video Url: ", videoUrl);
    return videoUrl;
  }

  deletDevoir(id: string){
    if(confirm('Are you sure to delete this Course?')){
      this.travauxService.deletDevoir(id)
    this.router.navigate(['/'])

    }
  }




}
