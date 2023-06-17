import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { UsersCollaboratorsDTO } from 'src/modules/user/user.dto';

class UserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Length(11, 11, {
    message: 'Valor invalido para CPF, precisa ter 11 digitos',
  })
  cpf: string;

  @IsString()
  @IsEmail()
  email: string;

  password: string;

  @IsString()
  @IsPhoneNumber('BR', {
    message: 'Formato de telefone incorreto, Ex: 011-942424242',
  })
  phone: string;
}

class AppointmentServiceDTO {
  tipoDoServico: string;
  tempo: Date;
  valor: number;
}
export class AppointmentDTO {
  id: string;
  dia: Date;
  cliente: string;
  barbeiroResponsavel: string;
  servico: AppointmentServiceDTO[];
  startDate: Date;
  endDate: Date;
}

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

  @IsString()
  nota: string;
}

class funcionamentoHora {
  horarioFuncionamento: string[];
  horaAlmoço?: string[];
}

class BarberShopServicesDTO {
  tipo: string;
  tempoParaSerFeito: string;
  valor: number;
}
class ScheduleDTO {
  horaDeFuncionamento: funcionamentoHora;
  diaNaoTrabalhados: string[];
  feriados: string[];
}
export class BarberShopDTO {
  id: string;
  @IsString()
  name: string;

  @IsString()
  address: string;

  @ValidateNested()
  contactBarberShop?: ContactBarberShopDTO;

  @ValidateNested({ each: true })
  @Type(() => UsersCollaboratorsDTO)
  collaborators: UsersCollaboratorsDTO[];

  servicos: BarberShopServicesDTO[];

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
  fotos: string[];
}
