import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phone: string;
}
