import { User } from "../entities/user";

export interface UserGateway {
  fetchAll(): Promise<User[]>;
  fetchById(id: string): Promise<User>;
}
