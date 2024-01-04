export interface ResponseModel {
    message: string;
    result: boolean;
    data: any;
}

export interface NewAppointment {
    name: string
    mobileNo: string
    city: string
    age: number
    gender: string
    appointmentDate: string
    appointmentTime: string
    isFirstVisit: boolean
    naration: string
    appointmentNo: 1
}

export interface IList {
        appointmentDate: string
        appointmentId: number
        appointmentTime: string
        isFirstVisit: boolean
        naration: string
        name: string
        patientId: number
        mobileNo: string
        isDone: boolean
        appointmentNo: number
      }