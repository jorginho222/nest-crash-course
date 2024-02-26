import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUserName(username)
    if (user && bcrypt.compare(password, user.password)) {
      const {password, ...result} = user
      return result
    }
    return null
  }

  async login(user: User) {
    const payload = {
      username: user.email,
      sub: {
        name: user.name
      }
    }

    return {
      ...user,
      accessToken: this.jwtService.sign(payload)
    }
  }
}
