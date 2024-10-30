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
  validEmail: string = 'invitado@gmail.com';
  validPassword: string = '12345678';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  // Función de inicio de sesión
  async login() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      // Redirigir a la página de inicio si las credenciales son correctas
      this.router.navigate(['/home']);
    } else {
      await this.mostrarAlertaError();
    }
  }

  async mostrarAlertaError() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Credenciales inválidas. Por favor, verifique su correo y contraseña.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
