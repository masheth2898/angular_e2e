import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuToggle() {
    document.body.classList.toggle('menu-open');
    document.body.classList.remove('page-sidebar-open');
  }
  closeMenu() {
    document.body.classList.remove('menu-open');
  }
  onResize() {
    document.body.classList.remove('menu-open');
    document.body.classList.remove('page-sidebar-open');
  }

}
