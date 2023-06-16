import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  cpf: String,
  email: String,
  password: String,
  phone: String,
});
