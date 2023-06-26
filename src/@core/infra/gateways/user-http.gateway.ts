import { User } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateways/user.gateway";
import { fetchClient } from "../http";

export class UserHttpGateway implements UserGateway {
  constructor(private http: fetchClient) {
    this.http = http;
  }

  async fetchAll(): Promise<User[]> {
    const users = await this.http<User[]>("http://localhost:3001/users");
    return users.map((user: any) => {
      return new User({
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        date: new Date().toLocaleDateString(),
        role: "user",
      });
    });
  }

  async fetchById(id: string): Promise<User> {
    const user = await this.http<User>(`http://localhost:3001/users/${id}`);
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      date: new Date().toLocaleDateString(),
      role: "user",
    });
  }
}
