
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api.service';
@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.less']
})
export class ConnexionComponent implements OnInit {

    login: string = "";
    password: string = "";
    errorMessage:string = "";

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
    }

    connexion() {
        this.apiService.login(this.login, this.password).subscribe((flux) => {
            this.router.navigate(["/catalogue"]);
        }, (error) => {
            this.errorMessage = "Identifiants incorrects."
        });
    }
}