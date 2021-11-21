import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { user_id }: any = request.headers;
            const users = this.listAllUsersUseCase.execute({ user_id });
            return response.json(users);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { ListAllUsersController };
