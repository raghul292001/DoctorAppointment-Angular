import { Component } from '@angular/core';
import { NewAppointment, ResponseModel } from 'src/app/models/appointments';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css'],
  providers: [MessageService]
})
export class NewAppointmentComponent {
  appointmentObj:NewAppointment={
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2024-01-03T16:14:26.857Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": "",
    "appointmentNo": 1
  }
  constructor(private appointmentSrv:AppointmentsService,private messageService: MessageService){}
  createAppointment(){
    this.appointmentSrv.addNewAppointment(this.appointmentObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered Successfully' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${res.message}` });
      }
    })
  }
}
