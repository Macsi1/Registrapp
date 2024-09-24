import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showFunctionality = false;

  toggleFunctionality() {
    this.showFunctionality = !this.showFunctionality;
  }
}
