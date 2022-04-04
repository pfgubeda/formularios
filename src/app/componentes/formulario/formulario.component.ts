import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'formularios';

  usuario={
    nombre: 'Pablo',
    apellido:'Fernandez'
  }

  guardar(formulario:NgForm){
    if(formulario.invalid){
      alert("Introducelo bien cazurro");
      Object.values(formulario.controls).forEach(control =>{
        control.markAllAsTouched();
      })
    }
  }
}
