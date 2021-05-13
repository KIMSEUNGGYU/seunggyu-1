import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from '@users/users.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getByUserId(userId: string) {
    const user = this.usersRepository.findOne({ userId });
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }

  async createUser(user: Users) {
    try {
      const hashedPassword = await hash(user.password, 10);
      this.usersRepository.save({ ...user, password: hashedPassword });
    } catch (error) {
      if (error?.code === 'ER_DUP_ENTRY') {
        throw new HttpException('User with that userId already exists', HttpStatus.BAD_REQUEST);
      }
    }
  }
}
