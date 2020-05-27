import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // nom:string;
  email:string;
  password:string;

  constructor(private authEtudiant: AuthService, private Route:Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.authEtudiant.register(this.email, this.password)
    .then(register =>{
        this.Route.navigate(['/'])
    })


  }

}
