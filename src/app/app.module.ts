import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { SuccessComponent } from './components/success/success.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent, SuccessComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
