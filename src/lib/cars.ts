import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllCars() {
  return await prisma.car.findMany();
}

export async function addCar(name: string, description: string, price: number) {
  return await prisma.car.create({
    data: { name, description, price },
  });
}
