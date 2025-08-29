/*
  Warnings:

  - You are about to drop the column `FTE impact (High, m€)` on the `levers` table. All the data in the column will be lost.
  - You are about to drop the column `FTE impact (Low, m€)` on the `levers` table. All the data in the column will be lost.
  - Added the required column `FTE Count High` to the `levers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FTE Count Low` to the `levers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "levers" DROP COLUMN "FTE impact (High, m€)",
DROP COLUMN "FTE impact (Low, m€)",
ADD COLUMN     "FTE Count High" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "FTE Count Low" DOUBLE PRECISION NOT NULL;
