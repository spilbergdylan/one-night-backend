// src/controllers/nightController.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createNight = async (req: any, res: any) => {
  const { title, date, location } = req.body;
  try {
    const night = await prisma.night.create({
      data: { title, date, location },
    });
    res.json(night);
  } catch (error) {
    res.status(500).json({ message: 'Error creating night' });
  }
};

export const getNights = async (req: any, res: any) => {
  try {
    const nights = await prisma.night.findMany();
    res.json(nights);
  } catch (error) {
    console.error('Error fetching nights:', error);
    res.status(500).json({ message: 'Error fetching nights' });
  }
};

export const getNightById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const night = await prisma.night.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(night);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching night' });
  }
};
