import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';


  /**
   *
   * @export
   * @class RegisterComponent
   * @implements {OnInit}
   */
  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  email:string;
  password:string;

  constructor(private authEtudiant: AuthService, private Route:Router) { }

  ngOnInit(): void {
  }
  
  /**
   * methode pour new Register
   *
   * @memberof RegisterComponent
   */

onRegister(){
    this.authEtudiant.register(this.email, this.password)
    .then(register =>{
        this.Route.navigate(['/'])
    })


  }

}
