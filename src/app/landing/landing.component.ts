import { Component, OnInit } from '@angular/core';
declare var $: any
const bootstrap = require('bootstrap')

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  id: string = ''
  count = [1, 2, 3];
  visual =[
    {id:1,titulo:"Reid et Al[1]",
    imagen:"../../assets/images/1D Color Nodos.gif",
    descripcion:"Esta visualizacion se utiliza en [1] con el objetivo de poder distinguir como se distribuye el flujo entre los diferentes nodos al mostrar mediante flechas direccionadas. se destaca esta visualizacion debido a la simplicidad que tiene para mostrar informacion.",
    propiedades:'Transacciones',
    canales:'Color de nodos',
    estandar:'se utiliza el color en el nodo para diferenciar a los diferentes usuarios y en las aristas para demostrar al emisor'},
    {id:2,titulo:"BitConeView[2]",
    imagen:"../../assets/images/2D Tam Ari- Col Nod.gif",
    descripcion:"Esta visualizacion se utiliza en [1] con el objetivo de poder distinguir como se distribuye el flujo entre los diferentes nodos al mostrar mediante flechas direccionadas. se destaca esta visualizacion debido a la simplicidad que tiene para mostrar informacion.",
    propiedades:'Transacciones',
    canales:'Tamaño de aristas y color nodos',
    estandar:'se utiliza el color del nodo en las aristas para demostrar al emisor'},
    {id:3,titulo:"BlockChain Explorer[1]",
    imagen:"../../assets/images/3D Color nodo - Color Arista - Tamaño nodo.gif",
    descripcion:"Esta visualizacion se utiliza en [1] con el objetivo de poder distinguir como se distribuye el flujo entre los diferentes nodos al mostrar mediante flechas direccionadas. se destaca esta visualizacion debido a la simplicidad que tiene para mostrar informacion.",
    propiedades:'Transacciones',
    canales:'Tamaño de nodos, color de nodos y color de aristas',
    estandar:'se utiliza el color del nodo en las aristas para demostrar al emisor'}
  ]
  constructor() { }

  ngOnInit(): void {
    $("*").tooltip('enable');

  }

  closealert() {
    $(".alert").fadeOut();
  }

}



