import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export class UsersController {
  public async list(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();

    return response.status(200).json({
      users,
    });
  }

  public async create(request: Request, response: Response) {
    const prisma = new PrismaClient();

    const { email, name } = request.body;

    const users = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    const listUser = await prisma.user.findMany();

    return response.status(201).json({
      listUser,
    });
  }

  public async show(request: Request, response: Response) {
    const prisma = new PrismaClient();

    const { id } = request.params; 

    const users = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return response.status(200).json({
      users,
    });
  } 

  public async update(request: Request, response: Response) {
    const prisma = new PrismaClient();

    const { id } = request.params; 
    const { name, email } = request.body;

    const users = await prisma.user.update({
      where: {
        id
      }, 
      data: {
        name, 
        email
      }
    });

    return response.status(200).json({
      users,
    });
  } 

  public async delete(request: Request, response: Response) {
    const prisma = new PrismaClient();

    const { id } = request.params; 

    const users = await prisma.user.delete({
      where: {
        id,
      }
    });

    return response.status(200).json({
      users,
    });
  }
}
