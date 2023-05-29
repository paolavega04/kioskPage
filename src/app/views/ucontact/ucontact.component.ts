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
    relacion_cliente: null,
    tel_contacto_confianza: null,
    correo_contacto_confianza: null,
    contrasena_contacto_confianza: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {}

  ngOnInit(): void {
  }
  onSubmit(): void {
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
      relacion_cliente,
      tel_contacto_confianza,
      correo_contacto_confianza,
      contrasena_contacto_confianza} = this.form;

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
    relacion_cliente,
    tel_contacto_confianza,
    correo_contacto_confianza,
    contrasena_contacto_confianza).subscribe({
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

}
