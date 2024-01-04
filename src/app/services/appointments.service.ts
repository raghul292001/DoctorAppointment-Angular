import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewAppointment, ResponseModel } from '../models/appointments';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CONSTANT } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  apiEndPoint:string='';
  constructor(private http:HttpClient) { 
    this.apiEndPoint = environment.ApiEndPoints;
  }

  addNewAppointment(obj:NewAppointment):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.ADDNEWAPPOINTMENT,obj);
  }
  getAllAppointment():Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.GET_ALL_APPOINTMENT);
  }
  getTodaysAppointment():Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.GET_TODAYS_APPOINTMENT);
  }
  getAllAppointments():Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.GET_ALL_APPOINTMENT);
  }
  markAppointmentDone(appointmentId:number):Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.apiEndPoint+CONSTANT.ENDPOINTS.MARK_APPOINTMENT_DONE+'?appointmentId='+appointmentId);
  }
}
