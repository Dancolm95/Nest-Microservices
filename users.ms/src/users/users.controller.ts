import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'findAllUsers' })
  handleFindAll() {
    return [{ id: 1, name: 'Neo' }];
  }
}
