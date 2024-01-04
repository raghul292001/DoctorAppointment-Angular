import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http'
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    NewAppointmentComponent,
    AppointmentListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
