import { Controller } from '@nestjs/common';
import { BarberShopService } from './barber-shop.service';

@Controller('barber-shop')
export class BarberShopController {
  constructor(private readonly barberShopService: BarberShopService) {}
}
