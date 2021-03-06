import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';


/**
 * Create by Belaid ATIF
 * 
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  userLogedIn: string;

  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLoggedIn = true;
        this.userLogedIn = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    })
  }
  
  /**
   * onLogout methode
   *
   * @returns
   * @memberof NavbarComponent
   */
  
onLogOut(){
    this.authService.logOut()
    return this.route.navigate(['/'])
  }

}
