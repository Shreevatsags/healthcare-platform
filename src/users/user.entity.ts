import { Role } from '../common/enums/role.enum';

export class User {
  id: number;
  email: string;
  password: string;
  role: Role;
}