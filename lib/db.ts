import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Allows for Hot Reloading when not in prod, otherwise creates a new prisma client in prod. To prevent a bunch of prisma clients being created in dev. 
export const db = globalThis.prisma || new PrismaClient(); 

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;