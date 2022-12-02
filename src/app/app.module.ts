import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from '@layouts/navbar/navbar.module';

import { ThemeModule } from '@components/theme/theme.module';
import { ToTopModule } from '@components/to-top/to-top.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from '@layouts/footer/footer.module';
import { CopyrightModule } from '@layouts/copyright/copyright.module';
import { ToastModule } from 'primeng/toast';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    CopyrightModule,
    ThemeModule,
    ToTopModule,
    ToastModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately',
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
