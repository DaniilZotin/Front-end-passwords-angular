import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

const routes: Routes = [
  { path: '', component: PasswordStrengthComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
