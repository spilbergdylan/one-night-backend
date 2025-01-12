/*
  Warnings:

  - You are about to drop the column `userId` on the `Invite` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_nightId_fkey";

-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_userId_fkey";

-- AlterTable
ALTER TABLE "Invite" DROP COLUMN "userId",
ADD COLUMN     "inviteeId" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "inviterId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_nightId_fkey" FOREIGN KEY ("nightId") REFERENCES "Night"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_inviteeId_fkey" FOREIGN KEY ("inviteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
