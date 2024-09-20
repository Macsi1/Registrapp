import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isMobile = /Mobi|Android/i.test(navigator.userAgent);
  }
}
