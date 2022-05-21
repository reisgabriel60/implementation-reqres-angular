import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroUsuarioComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FlexModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
