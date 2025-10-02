/*
  Warnings:

  - Made the column `thumbnail` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `metaTitle` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `metaDescription` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Blog" ALTER COLUMN "thumbnail" SET NOT NULL,
ALTER COLUMN "metaTitle" SET NOT NULL,
ALTER COLUMN "metaDescription" SET NOT NULL;
