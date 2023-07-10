import { Get, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('all')
  findUsers(): string[] {
    return ['ebrahim', 'hima'];
  }

  @Post('create')
  createUsers(): string {
    return 'user was creeted';
  }
}
