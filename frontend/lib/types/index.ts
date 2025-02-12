export interface ClientFormData {
    registrationNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    dateOfBirth: string;
    areaOfResidence: string;
    previousRx: string;
    registrationDate: string;
  }
  
  export interface StaffData {
    id: string;
    name: string;
    role: 'admin' | 'reception' | 'doctor' | 'sales';
    email: string;
  }