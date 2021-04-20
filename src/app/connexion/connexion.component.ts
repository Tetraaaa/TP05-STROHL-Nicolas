  
import { Component, OnInit } from '@angular/core';
import {FormulaireService} from '../formulaire.service'
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.less']
})
export class ConnexionComponent implements OnInit {

  login : string = "";
  password : string = "";

  constructor(private formulaireService : FormulaireService ) { }

  ngOnInit(): void {
  }

  connexion () {
    this.formulaireService.login (this.login,this.password).subscribe (flux => console.log (flux));
  }
}