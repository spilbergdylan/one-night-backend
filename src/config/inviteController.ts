// src/controllers/inviteController.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createInvite = async (req: any, res: any) => {
  const { inviterId, inviteeId, nightId, status } = req.body;
  try {
    const invite = await prisma.invite.create({
      data: {
        inviterId,
        inviteeId,
        nightId,
        status,
      },
    });
    res.json(invite);
  } catch (error) {
    console.error('Error creating invite:', error);
    res.status(500).json({ message: 'Error creating invite' });
  }
};

export const getInvitesByNight = async (req: any, res: any) => {
  const { nightId } = req.params;
  try {
    const invites = await prisma.invite.findMany({
      where: { nightId: parseInt(nightId) },
      include: { inviter: true, invitee: true, night: true },
    });
    res.json(invites);
  } catch (error) {
    console.error('Error fetching invites for night:', error);
    res.status(500).json({ message: 'Error fetching invites' });
  }
};
