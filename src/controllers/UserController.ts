import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsersService';
import ShowUserService from '../services/ShowUserService';
import DeleteUserService from '../services/DeleteUserService';

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    try {
      const listUsers = new ListUsersService();

      const users = await listUsers.execute();

      const usersWithoutPassword = users.map(user => {
        delete user.password_hash;
        return user;
      });

      return response.status(200).json(usersWithoutPassword);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async store (request: Request, response: Response): Promise<Response> {
    try {
      const { username, email, password_hash } = request.body;

      const createUser = new CreateUserService();

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

  public async show (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      
      const showUser = new ShowUserService();

      const user = await showUser.execute({ id });

      delete user.password_hash;

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async delete (request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      
      const deleteUser = new DeleteUserService();

      await deleteUser.execute({ id });

      return response.status(200).json({ message: 'User successfully deleted.'});
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
