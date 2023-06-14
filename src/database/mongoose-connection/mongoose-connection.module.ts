import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vm-user:vamomarcar123@vm-cluster0.tlqnjcb.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class MongooseConnectionModule {}
