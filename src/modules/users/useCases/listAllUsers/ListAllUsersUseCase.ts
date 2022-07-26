import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isUserAdmin = this.usersRepository.findById(user_id).admin;
    
    if(!isUserAdmin) {
      throw new Error("Only Admins can see users list");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
