import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  imports: [],
  selector: 'app-back-button',
  styleUrl: './back-button.css',
  templateUrl: './back-button.html',
})
export class BackButton {
  constructor(private location: Location) {}
  
  ngOnInit() {
  } 

  goBack() {
    this.location.back();
  }
}
