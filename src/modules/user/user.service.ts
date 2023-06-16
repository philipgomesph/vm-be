import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shared/documents/user.document';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: UserDTO) {
    const createUser = new this.userModel(user);
    return await createUser.save();
  }

  async findAllUsers() {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      throw new BadRequestException({ error });
    }
  }

  async findOneUserById(id: string) {
    try {
      const userToFind = await this.userModel.findById(id).exec();

      return userToFind;
    } catch (error) {
      throw new BadRequestException({ error });
    }
  }

  async update(id: string, data: UserDTO) {
    try {
      await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException({ 'Usuario não encontrado': { error } });
    }

    const returned = await this.userModel.updateOne({ _id: id }, data).exec();
    return returned;
  }

  async deleteHard(id: string) {
    try {
      await this.userModel.deleteOne({ _id: id }).exec();

      return { message: 'Usuario deletado com sucesso' };
    } catch (error) {
      throw new NotFoundException({ 'Usuario não encontrado': { error } });
    }
  }
}
