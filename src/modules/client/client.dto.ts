import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class ClientDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Length(11, 11, {
    message: 'Valor invalido para CPF, precisa ter 11 digitos',
  })
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR', {
    message: 'Formato de telefone incorreto, Ex: 011-942424242',
  })
  phone: string;
}
