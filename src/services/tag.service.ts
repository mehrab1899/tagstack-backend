import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Creates a new tag for the user with a normalized (lowercased) name.
 * Ensures uniqueness by checking exact lowercase match.
 */
export async function createTag(name: string, userId: string) {
  const normalized = name.trim().toLowerCase();

  const existing = await prisma.tag.findFirst({
    where: {
      userId,
      name: normalized, // case-insensitive enforced via lowercase
    },
  });

  if (existing) {
    throw new Error(`Tag "${name}" already exists.`);
  }

  return await prisma.tag.create({
    data: {
      name: normalized,
      userId,
    },
  });
}

/**
 * Returns all tags created by a specific user.
 * Ordered by most recent.
 */
export async function getTagsByUser(userId: string) {
  return await prisma.tag.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}
