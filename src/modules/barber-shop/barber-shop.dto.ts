import {
  IsString,
  IsArray,
  ValidateNested,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UsersCollaboratorsDTO } from '../user/user.dto';

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
}

class ServicoDTO {
  tipoDoServico: string;
  tempo: Date;
  valor: number;
}

class AppointmentDTO {
  cliente: string;
  servico: ServicoDTO[];
  dia: Date;
  startDate: Date;
  endDate: Date;
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

  @ValidateNested({ each: true })
  @Type(() => ReviewsDTO)
  reviews: ReviewsDTO[];

  @IsArray()
  fotos: string[];

  @ValidateNested({ each: true })
  @Type(() => AppointmentDTO)
  appointment?: AppointmentDTO[];

  //   @IsArray()
  //   schedule: Record<string, Record<string, string>>;

  //   @IsString()
  //   precos: Record<string, number>;
}
