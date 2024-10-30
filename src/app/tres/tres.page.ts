import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.page.html',
  styleUrls: ['./tres.page.scss'],
})

export class TresPage implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // Correo y contraseña permitidos
  validEmail: string = 'usuariopriviligiado@registrapp.cl';
  validPassword: string = '12345678';

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función de inicio de sesión
  login() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      // Redirigir a la página de inicio si las credenciales son correctas
      this.router.navigate(['/home']);
    } else {
      // Mostrar mensaje de error si las credenciales no coinciden
      this.errorMessage = 'Correo o contraseña incorrectos. Inténtelo de nuevo.';
    }
  }
}
