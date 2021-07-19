import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  id: string = ''
  count = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

  closealert() {

    $(".alert").fadeOut();
  }

}
