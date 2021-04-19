import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) {}
  currentPopover:any = null;

  ngOnInit() {}
  home(){
    this.router.navigate(['/'])
  }
  servicios(){
    this.router.navigate(['/','servicios'])
  }
  contacto(){
    this.router.navigate(['/','contacto'])
  }
  productos(){
    this.router.navigate(['/','productos'])
  }
}
