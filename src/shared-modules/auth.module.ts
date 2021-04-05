import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginFormComponent } from 'src/components/login-form/login-form.component';
import { SignupFormComponent } from 'src/components/signup-form/signup-form.component';
import { PasswordResetFormComponent } from 'src/components/password-reset-form/password-reset-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [LoginFormComponent, SignupFormComponent, PasswordResetFormComponent],
  exports: [LoginFormComponent, SignupFormComponent, PasswordResetFormComponent],
  entryComponents: [LoginFormComponent, SignupFormComponent, PasswordResetFormComponent]
})
  
export class AuthModule {}
