import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { MessageService } from 'primeng/api';
import { IList, NewAppointment } from 'src/app/models/appointments';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
  providers: [MessageService]
})
export class AppointmentListComponent implements OnInit {
  appointmentList:IList[] = []

  constructor(private appointmentSrv:AppointmentsService,private messageService: MessageService){

  }
  ngOnInit(): void {
    this.getTodaysAppointments();    
  }

  getTodaysAppointments(){
    this.appointmentSrv.getTodaysAppointment().subscribe((res:any)=>{
      this.appointmentList=res.data;
    },error=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Api Error' });
    })
  }
  getAllAppointment(){
    this.appointmentSrv.getAllAppointments().subscribe((res:any)=>{
      this.appointmentList=res.data;
    },error=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Api Error' });
    })
  }
  markDone(appointmentId:number){
    this.appointmentSrv.markAppointmentDone(appointmentId).subscribe((res:any)=>{
      this.getTodaysAppointments();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Done'});
    },error=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Api Error' });
    })

  }

}
