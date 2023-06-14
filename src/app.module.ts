import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { UserModule } from './modules/user/user.module';
import { BarberShopModule } from './modules/barber-shop/barber-shop.module';
import { MongooseConnectionModule } from './database/mongoose-connection/mongoose-connection.module';

@Module({
  imports: [
    ClientModule,
    UserModule,
    BarberShopModule,
    MongooseConnectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
