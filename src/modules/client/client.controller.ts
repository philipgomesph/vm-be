import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDTO } from './client.dto';
import { Client } from 'src/shared/documents/client.document';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() data: ClientDTO) {
    console.log(data);
    return this.clientService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ClientDTO) {
    return this.clientService.update(id, data);
  }

  @Get()
  async getAll() {
    return this.clientService.getAllClient();
  }

  @Get(':id')
  async getClientById(@Param('id') id: string) {
    return this.clientService.findOneClientById(id);
  }
}
