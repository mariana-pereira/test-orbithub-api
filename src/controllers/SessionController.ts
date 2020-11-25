import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionController {
  public async store (request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body;

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute({
        username,
        password,
      });
  
      delete user.password_hash;

      return response.status(200).json({ user, token });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new SessionController();