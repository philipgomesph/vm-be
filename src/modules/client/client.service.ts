import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from 'src/shared/documents/client.document';
import { ClientDTO } from './client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async getAllClient() {
    try {
      return await this.clientModel.find().exec();
    } catch (error) {
      throw new BadRequestException({ error });
    }
  }

  async findOneClientById(id: string) {
    try {
      const clientToFind = await this.clientModel.findById(id).exec();

      return clientToFind;
    } catch (error) {
      throw new BadRequestException({ error });
    }
  }

  async create(client: ClientDTO) {
    const createdClient = new this.clientModel(client);
    return await createdClient.save();
  }

  async update(id: string, data: ClientDTO) {
    try {
      await this.clientModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException({ 'Usuario não encontrado': { error } });
    }

    const returned = await this.clientModel.updateOne({ _id: id }, data).exec();
    return returned;
  }
}
