import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  error : boolean = false;
  nom : string = "";
  prenom : string = "";
  username : string = "";
  password : string = "";
  password2 : string = "";

  ngOnInit(): void {
  }

  onSubmit():void {
    
  }

}
