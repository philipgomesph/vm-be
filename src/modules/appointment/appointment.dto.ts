import {
  IsString,
  IsArray,
  ValidateNested,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

class AppointmentServiceDTO {
  typeService: string;
  time: string;
  value: number;
}
export class AppointmentDTO {
  day: Date;
  client: string;
  collaborator: string;
  serviceAppointment: AppointmentServiceDTO[];
  startDate: Date;
  endDate: Date;
}
