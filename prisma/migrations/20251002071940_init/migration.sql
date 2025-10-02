/*
  Warnings:

  - You are about to drop the column `published` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "published";

-- DropTable
DROP TABLE "public"."Project";

-- CreateTable
CREATE TABLE "public"."projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "tags" TEXT[],
    "thumbnail" TEXT NOT NULL,
    "liveSite" TEXT NOT NULL,
    "githubClient" TEXT NOT NULL,
    "githubBackend" TEXT,
    "technologies" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
