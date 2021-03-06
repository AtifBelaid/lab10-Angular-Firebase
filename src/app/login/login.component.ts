import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';

  /**
   * Create by Belaid ATIF
   *
   * @export
   * @class LoginComponent
   * @implements {OnInit}
   */

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   this.authService.getAuth().subscribe(auth =>{
     if(auth) {
       return this.router.navigate(['/dashboard']);
     }
   })
  }
  
  /**
   * Methode pour faire Login
   *
   * @memberof LoginComponent
   */

onLogin(){
    this.authService.login(this.email, this.password)
    .then(auth =>{
      this.router.navigate(['/dashboard']);
      
    })
    .catch(error);
  }
  
  /**
   * Faire login par google account
   *
   * @memberof LoginComponent
   */
  
onLoginWithGo(){
    this.authService.onLoginWithGo()
    .then(auth =>{
      this.router.navigate(['/dashboard']);
      
    })
    .catch(error);
  }

}
