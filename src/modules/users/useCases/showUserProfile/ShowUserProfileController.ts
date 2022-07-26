import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    
    try {
      const { user_id } = request.params;
      const id = user_id.toString()

      const user = this.showUserProfileUseCase.execute({ user_id: id });

      return response.json(user);

    } catch (error) {
      response.status(404).json({ error: error.message });
    }


  }
}

export { ShowUserProfileController };
