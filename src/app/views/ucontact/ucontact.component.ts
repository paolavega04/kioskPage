import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services_/auth.service';
import { StorageService } from 'src/app/services_/storage.service';

@Component({
  selector: 'app-ucontact',
  templateUrl: './ucontact.component.html',
  styleUrls: ['./ucontact.component.css']
})

export class UcontactComponent implements OnInit {

  _listapadecimientos!: padecimientos[];

  get_padecimientos()
  {
    this._listapadecimientos=[
      {id_padecimiento:1,nombre_padecimiento:"Diabetes tipo 1",isSelected:false},
      {id_padecimiento:2,nombre_padecimiento:"Diabetes tipo 2",isSelected:false},
      {id_padecimiento:3,nombre_padecimiento:"Obesidad",isSelected:false},
      {id_padecimiento:4,nombre_padecimiento:"Artritis",isSelected:false},
      {id_padecimiento:5,nombre_padecimiento:"Osteoporosis",isSelected:false},
      {id_padecimiento:6,nombre_padecimiento:"Parkinson",isSelected:false},
      {id_padecimiento:7,nombre_padecimiento:"Alzheimer",isSelected:false},
      {id_padecimiento:8,nombre_padecimiento:"Asma",isSelected:false},
      {id_padecimiento:9,nombre_padecimiento:"Fibrilación Auricular",isSelected:false},
      {id_padecimiento:10,nombre_padecimiento:"Hipotiroidismo",isSelected:false},
      {id_padecimiento:11,nombre_padecimiento:"Hipertension",isSelected:false}
    ]
  }

  onchange(){
    console.log(this._listapadecimientos);
  }

  form: any = {
    nombre: null,
    apellido_paterno: null,
    apellido_materno: null,
    genero: null,
    correo: null,
    telefono: null,
    contrasena: null,
    ciudad: null,
    estado: null,
    codigo_postal: null,
    a_nacimiento: null,
    pregunta_seguridad:null,
    respuesta_seguridad: null,
    placeholder: null,
    nombre_contacto_confianza: null,
    apellido_paterno_contacto_confianza: null,
    apellido_materno_contacto_confianza: null,
    plan_estatal: null,
    tel_contacto_confianza: null,
    correo_contacto_confianza: null,
    contrasena_contacto_confianza: null,
    pregunta_seguridad_contacto_confianza: null,
    respuesta_seguridad_confianza: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {}

  ngOnInit(): void {
    this.get_padecimientos();
  }

  onSubmit(): void {

    var condiciones = [];

    for (const condition in this._listapadecimientos){
      if(this._listapadecimientos[condition].isSelected == true){
        condiciones.push(this._listapadecimientos[condition].id_padecimiento);
      }
    }

    const {nombre,
      apellido_paterno, 
      apellido_materno, 
      genero, correo,
      telefono, contrasena, 
      ciudad, estado, 
      codigo_postal,
      a_nacimiento, 
      pregunta_seguridad,
      respuesta_seguridad,
      placeholder_h,
      nombre_contacto_confianza,
      apellido_paterno_contacto_confianza,
      apellido_materno_contacto_confianza,
      plan_estatal,
      tel_contacto_confianza,
      correo_contacto_confianza,
      contrasena_contacto_confianza,
      pregunta_seguridad_contacto_confianza,
      respuesta_seguridad_confianza} = this.form;

this.authService.register(
  nombre, 
  apellido_paterno, 
  apellido_materno,
  genero, 
  correo, 
  telefono, 
  contrasena, 
  ciudad, 
  estado, 
  codigo_postal,
  a_nacimiento, 
  pregunta_seguridad,
  respuesta_seguridad,
  placeholder_h,
  nombre_contacto_confianza,
  apellido_paterno_contacto_confianza,
  apellido_materno_contacto_confianza,
  plan_estatal,
  tel_contacto_confianza,
  correo_contacto_confianza,
  contrasena_contacto_confianza,
  pregunta_seguridad_contacto_confianza,
  respuesta_seguridad_confianza,
  condiciones).subscribe({
  next: data => {
    this.isSuccessful = true;
    this.isSignUpFailed = false;
    this.router.navigate(['login']);

  },
  error: err => {
    this.errorMessage = err.error.message;
    this.isSignUpFailed = true;
  }
});
}


  salir(){
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        this.router.navigate(["login"]);
        
      },
      error: err => {
        console.log(err);
      }
    });
  }
  registro(){
    this.router.navigate(['login']);
}

};

class padecimientos {
  id_padecimiento: number | undefined;
  nombre_padecimiento: string| undefined;
  isSelected: boolean | undefined;
};
