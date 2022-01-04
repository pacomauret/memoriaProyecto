import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
    $("#nueva-vis").removeClass("active");
    $("#informacion").addClass("active");
    $("#recomendadas").removeClass("active");
  }

}
