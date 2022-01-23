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
  canal: string = '';
  visualizacion = [[]];
  resultados_prop = '';
  resultados_can = '';
  resultados = [{ imagen: '', titulo: '', descripcion: '', canales: '',estandar:'' }];
  categoria = 'Escoge una';
  propiedad = 'Escoge una';
  flagAgregar = true;
  flagFirst = true;

  constructor() { }

  ngOnInit(): void {
    $("#nueva-vis").addClass("active");
    $("#informacion").removeClass("active");
    $("#recomendadas").removeClass("active");
  }


  get_prop() {
    this.resultados_prop = '';
    for (var i = 0; i < this.visualizacion.length; i++) {
      if (this.visualizacion.length - 1 == i) {
        this.resultados_prop += this.visualizacion[i][1]
      }
      else {
        this.resultados_prop += this.visualizacion[i][1] + ','
      }
    }
    if (this.visualizacion.length>2){
      this.flagAgregar=true
    }
    else{
      this.flagAgregar=false
    }
  }
  actualizar_resultados() {
    var img = ''
    var img2 = ''
    var img3 = '';
    if (this.visualizacion.length == 1) {
      img = '../../assets/images/1D Color Nodos.gif'
      this.resultados =
        [{
          imagen: img,
          titulo: "1D COLOR NODOS",
          descripcion: "Esta visualizacion se utiliza en [1] con el objetivo de... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
          canales: 'Color nodos',
          estandar:'Se utiliza el color del nodo emisor en el vertice'
        }]
    }
    if (this.visualizacion.length == 2) {
      img = '../../assets/images/2D Tam Ari- Col Nod.gif'
      img2 = '../../assets/images/2D Tam Nod-Col Nod.gif'
      this.resultados =
        [{
          imagen: img,
          titulo: "TITULO1",
          descripcion: "Esta visualizacion se utiliza en [1] con el objetivo de... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
          canales: 'Tamaño arista y Color nodo',
          estandar:'Se utiliza color de nodos para identificar distintos nodos y se utiliza una flecha con distintos tamaños para representar la cantidad enviada'
        },
        {
          imagen: img2,
          titulo: "TITULO2",
          descripcion: "Esta visualizacion se utiliza en [1] con el objetivo de... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
          canales: 'Tamaño nodo y Color nodos.',
          estandar:'Se utiliza el tamaño de los nodos para representar los nodos que tienen mas movimiento de valor y el color de los nodos para identificar distintos grupos de nodos'
        }];
    }
    if (this.visualizacion.length == 3) {
      img = '../../assets/images/3D Color nodo - Color Arista - Tamaño nodo.gif'
      img2 = '../../assets/images/2D Tam Ari- Col Nod.gif'
      img3 = '../../assets/images/2D Tam Nod-Col Nod.gif'
      this.resultados =
        [{
          imagen: img,
          titulo: "TITULO0",
          descripcion: "Esta visualizacion se utiliza en [1] con el objetivo de... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
          canales: 'Tamaño nodo, Color nodo y color arista',
          estandar:'Se utiliza el tamaño de los nodos para representar los nodos que tienen mas movimiento de valor, el color de los nodos para identificar distintos grupos de nodos y utiliza el color de las aristas para mostrar un gradiente del valor enviado o recibido'
        },
        {
          imagen: img2,
          titulo: "TITULO1",
          descripcion: "Esta visualizacion se utiliza en [1] con el objetivo de... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
          canales: 'Tamaño nodo y Color nodos.',
          estandar:'Se utiliza color de nodos para identificar distintos nodos y se utiliza una flecha con distintos tamaños para representar la cantidad enviada'
        },
        {
          imagen: img3,
          titulo: "TITULO2",
          descripcion: "Esta visualizacion se utiliza en [1] con el objetivo de... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
          canales: 'Tamaño nodo y Color nodos.',
          estandar:'Se utiliza el tamaño de los nodos para representar los nodos que tienen mas movimiento de valor y el color de los nodos para identificar distintos grupos de nodos '
        }];
    }
    console.log('this.result', this.resultados)
  }
  addCanal() {
    console.log("categoria=", this.categoria, "propiedad=", this.propiedad)
    const argumento = [
      this.categoria,
      this.propiedad
    ]
    console.log("ARGUMENTO=", argumento)
    if (this.flagFirst == true) {
      this.visualizacion.shift()
      this.flagFirst = false
    }

    this.visualizacion.push(<any>argumento)
    this.actualizar_resultados()
    this.get_prop()
  }
  cambiarPropiedades(categoria: string) {
    console.log("categoria es=", categoria)
    if (categoria == 'Transacciones') {
      this.propiedades = ['Cantidades', 'Tiempos', 'Direcciones'];

    }
    else if (categoria == 'Topología') {

      this.propiedades = ['Grado de centralidad', 'Grado de salida y entrada', 'Clusterizacion', 'Herencia entre nodos'];
    }
    else if (categoria == 'Moneda') {
      this.propiedades = ['Anonimidad', 'Legalidad'];
    }
    this.propiedad = 'Escoge una'
    this.print(this.propiedad)
  }
  print(value: string) {
    if (value != 'Escoge una') {
      this.flagAgregar = false
    }
    else {
      this.flagAgregar = true
    }
    // console.log("valor es =",value, "flag",this.flagAgregar)

  }
  delete(id: number) {
    console.log("el valor de id=", id, "and visualizacion=", this.visualizacion)
    if (this.visualizacion.length == 1) {
      this.visualizacion = [[]]
      this.flagFirst = true
    }
    else {
      if (id == 0) {
        this.visualizacion.shift()
      }
      else {
        this.visualizacion.splice(id, id)
      }
    }

    this.actualizar_resultados()
    this.get_prop()
    console.log("el valor de id=", id, "and visualizacion after=", this.visualizacion)
  }

}
