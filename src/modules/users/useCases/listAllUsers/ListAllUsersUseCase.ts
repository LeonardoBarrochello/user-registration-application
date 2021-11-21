import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const allUsers = this.usersRepository.list();
        const existsUser = this.usersRepository.findById(user_id);
        if (!existsUser) {
            throw new Error("User does not exists!");
        }
        if (!existsUser.admin === true) {
            throw new Error(
                "User doesn't have permission to execute this action!"
            );
        }
        return allUsers;
    }
}

export { ListAllUsersUseCase };
