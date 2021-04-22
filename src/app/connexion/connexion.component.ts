
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormulaireService } from '../formulaire.service'
@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.less']
})
export class ConnexionComponent implements OnInit {

    login: string = "";
    password: string = "";
    errorMessage:string = "";

    constructor(private formulaireService: FormulaireService, private router: Router) { }

    ngOnInit(): void {
    }

    connexion() {
        this.formulaireService.login(this.login, this.password).subscribe((flux) => {
            this.router.navigate(["/catalogue"]);
        }, (error) => {
            this.errorMessage = "Identifiants incorrects."
        });
    }
}