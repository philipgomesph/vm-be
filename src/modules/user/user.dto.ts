import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class UsersCollaboratorsDTO {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString({ each: true })
  specialties?: string[];
}

export class UserDTO {
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
