import { Document } from 'mongoose';

export class Client extends Document {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phone: string;
}
