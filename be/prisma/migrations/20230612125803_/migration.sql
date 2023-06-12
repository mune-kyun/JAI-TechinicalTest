/*
  Warnings:

  - Added the required column `jUserId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "jUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_jUserId_fkey" FOREIGN KEY ("jUserId") REFERENCES "JUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
