import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.scss'],
})
export class LoginPrincipalComponent implements OnInit {
  //variables
  public password: string;
  public email:string;
  constructor( private router: Router) {
    this.password="";
    this.email="";
   }

  ngOnInit() { }

  login(){
    this.router.navigate(['pages/registro']);
  }

}
