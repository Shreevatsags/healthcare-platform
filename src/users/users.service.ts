import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Role } from '../common/enums/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(email: string, password: string, role: Role) {
    const hashed = await bcrypt.hash(password, 10);

    const user: User = {
      id: Date.now(),
      email,
      password: hashed,
      role,
    };

    this.users.push(user);
    return user;
  }

  async findByEmail(email: string) {
    return this.users.find((u) => u.email === email);
  }
}