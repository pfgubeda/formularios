import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "templateform";
  miFormulario: FormGroup;

  constructor(private fb:FormBuilder){
    this.miFormulario = this.fb.group({
      'nombre':[''],
      'apellido' :[''],
      'correo':['']
    })
  }



  guardarFormulario(){
    
  }
}
