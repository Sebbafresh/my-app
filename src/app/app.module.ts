import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideAppComponent } from './side-app/side-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { IpInfoComponent } from './ip-info/ip-info.component';
import { TestMedEirikComponent } from './test-med-eirik/test-med-eirik.component';

@NgModule({
  declarations: [
    AppComponent,
    SideAppComponent,
    IpInfoComponent,
    TestMedEirikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
