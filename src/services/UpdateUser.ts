import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import User from '@models/User';

interface Request {
  id: string;
  username: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}

class UpdateUserService {
  public async execute({ 
    id, 
    username, 
    email, 
    oldPassword, 
    newPassword 
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ 
      where: { id }
     });

    if (!user) {
      throw new Error('User not found.');
    }

    const userWithUpdatedUsername = await usersRepository.findOne({
      where: { username }
    });

    if (userWithUpdatedUsername && userWithUpdatedUsername.id !== id) {
      throw new Error('Username already in use.');
    }

    const userWithUpdatedEmail = await usersRepository.findOne({
      where: { email }
    });

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== id) {
      throw new Error('E-mail already in use.');
    }

    user.username = username;
    user.email = email;

    if (newPassword && !oldPassword) {
      throw new Error(
        'You need to inform the old password to set a new password.',
      );
    }

    if (newPassword && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password_hash);

      if (!checkOldPassword) {
        throw new Error('Old password does not match.');
      }

      user.password_hash = await hash(newPassword, 8);
    }

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;