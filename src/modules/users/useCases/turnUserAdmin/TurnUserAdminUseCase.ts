import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    const userAlreadyAdmin = user.admin

    if(!user || userAlreadyAdmin) {
      throw new Error("User not exists! or user already Admin");
    }

    const turnAdminUser = this.usersRepository.turnAdmin(user);

    return turnAdminUser;
  }
}

export { TurnUserAdminUseCase };
