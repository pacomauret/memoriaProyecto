import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-nueva-visualizacion',
  templateUrl: './nueva-visualizacion.component.html',
  styleUrls: ['./nueva-visualizacion.component.css']
})
export class NuevaVisualizacionComponent implements OnInit {
  count = [];
  canal:string=''
  visualizacion:String[] =[];



  constructor() { }

  ngOnInit(): void {
    $("#nueva-vis").addClass("active");
    $("#informacion").removeClass("active");
    $("#recomendadas").removeClass("active");
  }
  addCanal(){
    this.canal = $('#select-canal')[0].value
    console.log("this.canal",this.canal)
    this.visualizacion.push(this.canal)
  }


}
