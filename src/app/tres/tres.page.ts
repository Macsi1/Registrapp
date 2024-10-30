import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.page.html',
  styleUrls: ['./tres.page.scss'],
})
export class TresPage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    if (this.email === 'invitado@gmail.com' && this.password === '12345678') {
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
