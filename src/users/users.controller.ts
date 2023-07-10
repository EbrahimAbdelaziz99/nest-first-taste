import { Get, Controller, Post, Patch, Delete, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
  @Get('all')
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req);
    return res.send(`${JSON.stringify(req.body.Ebrahim)}`);
  }

  @Get('user')
  findOne(): string {
    return 'user data!';
  }

  @Post('register')
  create(): string {
    return 'user signed up!';
  }

  @Post('login')
  login(): string {
    return 'logged in!';
  }

  @Patch('update')
  edit(): string {
    return 'updated!';
  }

  @Delete('delete')
  delete(): string {
    return 'deleted!';
  }
}
