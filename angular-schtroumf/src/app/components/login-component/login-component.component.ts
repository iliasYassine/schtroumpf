import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;



  constructor(private http: HttpClient,private router:Router) {}

  login(): void {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/login', loginData).subscribe(
      (response) => {
        // Connexion réussie, gérer la réponse du serveur ici
        console.log(response);
        console.log('Login function called');
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Erreur lors de la connexion, gérer l'erreur ici
        console.error(error);
      }
    );
  }

}
