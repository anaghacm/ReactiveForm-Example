import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerBaseComponent } from './flower-base/flower-base.component';
import { FormComponent } from './homepage/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDisplayComponent } from './homepage/data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerBaseComponent,
    FormComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
