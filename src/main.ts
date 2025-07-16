// src/main.ts
import { bootstrapApplication }             from '@angular/platform-browser';
import { importProvidersFrom }              from '@angular/core';

import { AppComponent }                     from './app/app.component';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    )
  ]
}).catch(err => console.error(err));
