import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public async store (request: Request, response: Response): Promise<Response> {
    try {
      const { username, email, password_hash } = request.body;

      const createUser = new UserService();

      const user = await createUser.execute({
        username,
        email,
        password_hash,
      });

      delete user.password_hash;

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
