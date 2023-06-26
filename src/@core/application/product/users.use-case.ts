import { User } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateways/user.gateway";

export class ListUsersUseCase {
  constructor(private userGateway: UserGateway) {
    this.userGateway = userGateway;
  }
  async execute(): Promise<User[]> {
    return await this.userGateway.fetchAll();
  }
}

export class GetUserUseCase {
  constructor(private userGateway: UserGateway) {
    this.userGateway = userGateway;
  }
  async execute(id: string): Promise<User> {
    return await this.userGateway.fetchById(id);
  }
}
