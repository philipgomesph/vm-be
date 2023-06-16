import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO) {
    console.log(data);
    return this.userService.create(data);
  }

  @Get()
  async getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async getByIdUsers(@Param('id') id: string) {
    return this.userService.findOneUserById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UserDTO) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async deleteHard(@Param('id') id: string) {
    return this.userService.deleteHard(id);
  }
}
