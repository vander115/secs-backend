import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import Zod from 'zod';

import { prisma } from '../lib/prisma';
import { AppError } from '../errors/AppError';
import { compare } from 'bcrypt';

export class AuthenticateController {
  public async create(request: Request, response: Response) {
    const bodySchema = Zod.object({
      email: Zod.string().email(),
      password: Zod.string().min(6),
    }).strict();

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new AppError(
        'Email ou senha inválidos, cheque suas crendenciais',
        401,
      );
    }

    const passwordMatch = await compare(password, user.password_hash);

    if (!passwordMatch) {
      throw new AppError(
        'Email ou senha inválidos, cheque suas crendenciais',
        401,
      );
    }

    const token = sign({}, 'myultrasecretkey', {
      subject: user.id,
      expiresIn: '1d',
    });

    return response.status(200).json({
      token,
    });
  }
}
