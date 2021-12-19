import { Component, OnInit } from '@angular/core';


declare var $: any

@Component({
  selector: 'app-nueva-visualizacion',
  templateUrl: './nueva-visualizacion.component.html',
  styleUrls: ['./nueva-visualizacion.component.css']
})
export class NuevaVisualizacionComponent implements OnInit {
  count = [];
  propiedades: any;
  canal:string='';
  visualizacion=[[]];
  categoria='Escoge una';
  propiedad='Escoge una';
  flagAgregar=true;
  flagFirst=true;

  constructor() { }

  ngOnInit(): void {
    $("#nueva-vis").addClass("active");
    $("#informacion").removeClass("active");
    $("#recomendadas").removeClass("active");
  }
  addCanal(){
    console.log("categoria=",this.categoria,"propiedad=",this.propiedad)
    const argumento=[
      this.categoria,
      this.propiedad
    ]
    console.log("ARGUMENTO=",argumento)
    if(this.flagFirst==true){
      this.visualizacion.shift()
      this.flagFirst=false
    }
    
    this.visualizacion.push(<any>argumento)
  }
  cambiarPropiedades(categoria:string){
    console.log("categoria es=",categoria)
    if (categoria=='Transacciones'){
      this.propiedades=['a','c'];
    }
    else if(categoria=='Topología'){
      this.propiedades=['b','d'];
    }
    else if(categoria=='Moneda'){
      this.propiedades=['y','z'];
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
