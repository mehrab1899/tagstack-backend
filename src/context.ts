import { PrismaClient } from '@prisma/client';
import { verifyToken } from './utils/auth';
import { Request } from 'express';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  user: any | null;
}

export async function createContext({ req }: { req: Request }): Promise<Context> {
  const authHeader = req.headers.authorization || '';
  let user = null;

  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    const payload = verifyToken(token);
    if (payload) {
      user = await prisma.user.findUnique({ where: { id: payload.userId } });
    }
  }

  return { prisma, user };
}
