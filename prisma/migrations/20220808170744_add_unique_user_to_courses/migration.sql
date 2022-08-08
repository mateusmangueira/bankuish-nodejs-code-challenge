/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "courses_userId_key" ON "courses"("userId");
