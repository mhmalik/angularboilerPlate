import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { LoginComponent } from 'src/app/modules/login/login.component';

@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
