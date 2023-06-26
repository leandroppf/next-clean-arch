import {
  ListUsersUseCase,
  GetUserUseCase,
} from "../application/product/users.use-case";
import { User } from "../domain/entities/user";
import { UserHttpGateway } from "./gateways/user-http.gateway";
import { fetchApi } from "./http";

const userHttpGateway = new UserHttpGateway(fetchApi);

export const listUsers = async (): Promise<User[]> => {
  const listUser = new ListUsersUseCase(userHttpGateway);
  const users = await listUser.execute();

  return users;
};

export const getUserById = async (id: string): Promise<User> => {
  const getUser = new GetUserUseCase(userHttpGateway);
  const user = await getUser.execute(id);

  return user;
};
