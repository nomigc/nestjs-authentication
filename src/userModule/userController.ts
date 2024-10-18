import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './userService';
import { RegisterUserDto } from './dto/registerUserDto';
import { LoginUserDto } from './dto/loginDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  create(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }
}
