import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.less']
})
export class InscriptionComponent implements OnInit {

    login: string = "";
    password: string = "";
    password2: string = "";
    message: string = "";
    error: boolean = false;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
    }

    register() {
        this.error = false;
        if (this.password !== this.password2) {
            this.error = true;
            this.message = "Les mots de passe ne correspondent pas."
        }
        this.apiService.register(this.login, this.password).subscribe((flux) => {
            this.message = "Inscription réussie."
        }, (error) => {
            this.error = error.message;
        });
    }

}
