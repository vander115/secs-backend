import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authenticationHeader = request.headers.authorization;
  if (!authenticationHeader) {
    return response.status(401).json({
      message: 'Token required',
    });
  }

  const [_, token] = authenticationHeader.split(' ');

  try {
    const { sub } = verify(token, 'myultrasecretkey');
    request.userId = sub as string;

    return next();
  } catch (error) {
    throw new AppError(
      'Sessão expirada. Por favor, efetue login novamente.',
      401,
    );
  }
}
