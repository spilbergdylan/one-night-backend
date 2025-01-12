// src/controllers/userController.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (req: any, res: any) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

export const getUsers = async (req: any, res: any) => {
    console.log('GET /users request received');
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  };

export const getUserById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const deactivateUser = async (req: any, res: any) => {
    const { id } = req.params;
    try {
      // Update user status to 'inactive'
      const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { status: "inactive" },
      });
  
      res.json({ message: "User status updated to inactive", user });
    } catch (error) {
      console.error("Error updating user status:", error);
      res.status(500).json({ message: 'Error updating user status', error: (error as any).message });
    }
  };
  