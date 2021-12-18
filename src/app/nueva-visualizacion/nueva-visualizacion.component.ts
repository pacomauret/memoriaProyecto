import { Component, OnInit } from '@angular/core';


declare var $: any

@Component({
  selector: 'app-nueva-visualizacion',
  templateUrl: './nueva-visualizacion.component.html',
  styleUrls: ['./nueva-visualizacion.component.css']
})
export class NuevaVisualizacionComponent implements OnInit {
  count = [1,2,3];
  // string[] propiedades;
  canal:string=''
  visualizacion:String[] =[];
  categoria='Escoge una';
  propiedad='Escoge una';
  flagAgregar=true;

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
  cambiarPropiedades(categoria:string){
    if (categoria=='Transacciones'){
      // this.propiedades=['a','c'];
    }
  }
  print(value: string){
    if (value != 'Escoge una'){
      this.flagAgregar=false
    }
    else {
      this.flagAgregar=true
    }
    // console.log("valor es =",value, "flag",this.flagAgregar)

  }

}
