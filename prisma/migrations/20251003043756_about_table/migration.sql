-- AlterTable
ALTER TABLE "public"."projects" ALTER COLUMN "githubClient" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."about" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "heroText" TEXT NOT NULL,
    "careerSummary" TEXT NOT NULL,
    "interestText" TEXT NOT NULL,
    "goalText" TEXT NOT NULL,
    "resumeLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);
