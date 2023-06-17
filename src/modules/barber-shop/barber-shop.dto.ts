import {
  IsString,
  IsArray,
  ValidateNested,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  IsNumber,
  IsTaxId,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UsersCollaboratorsDTO } from '../user/user.dto';
import { AppointmentDTO } from '../appointment/appointment.dto';
import { DOTW } from 'src/shared/enum/dotw.enum';

class ContactBarberShopDTO {
  @IsString()
  @IsPhoneNumber('BR', {
    message: 'Formato de telefone incorreto, Ex: 011-942424242',
  })
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  specialty: string[];
}

class ReviewsDTO {
  @IsString()
  client: string;

  @IsString()
  comment: string;

  @IsNumber()
  rate: number;
}

class openingHoursDTO {
  startTime: string;
  endTime: string;
  horaAlmoço?: string;
}

class ServicesBarberShopDTO {
  service: string;
  duration: string;
  value: number;
}
class ScheduleDTO {
  openingHoursSchedule: openingHoursDTO;
  daysOff: DOTW[];
  holidays: string[];
}
export class BarberShopDTO {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @ValidateNested()
  contactBarberShop?: ContactBarberShopDTO;

  @ValidateNested({ each: true })
  @Type(() => UsersCollaboratorsDTO)
  collaborators: UsersCollaboratorsDTO[];

  servicesBarberShop: ServicesBarberShopDTO[];

  @ValidateNested({ each: true })
  @Type(() => AppointmentDTO)
  appointment?: AppointmentDTO[];

  @ValidateNested({ each: true })
  @Type(() => ScheduleDTO)
  schedule: ScheduleDTO;

  @ValidateNested({ each: true })
  @Type(() => ReviewsDTO)
  reviews: ReviewsDTO[];

  @IsArray()
  photos: string[];
}
