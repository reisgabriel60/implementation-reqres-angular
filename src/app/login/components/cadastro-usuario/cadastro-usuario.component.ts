import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Usuario} from "../../models/usuario";
import {CadastroUsuarioService} from "../../services/cadastro-usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  formUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private cadastroUsuarioService: CadastroUsuarioService,
              private router: Router) {
    this.formUsuario = this.createForm(new Usuario());
  }

  ngOnInit() {

  }

  createForm(usuario: Usuario) {
    return this.formBuilder.group({
      first_name: [usuario.first_name],
      last_name: [usuario.last_name],
      email: [usuario.email],
      password: [usuario.password],
      avatar_url: [usuario.avatar_url]
    })
  }

  onSubmit() {
    this.cadastroUsuarioService.salvarUsuario(this.formUsuario.value)
      .subscribe(
        (response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigateByUrl('usuarios');
            // this.formUsuario.reset(new Usuario());
          }
        }
      );
  }
}
