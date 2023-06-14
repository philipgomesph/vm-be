import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  email: String,
  password: String,
  phone: String,
});
