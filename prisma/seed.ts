import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Initialize Prisma Client
const prisma = new PrismaClient();

const BCRYPT_SALT_ROUNDS = 12;

async function main() {
  console.log("Seeding database...");

  const adminEmail = "admin@portfolio.com";
  const adminPassword = "12345678";

  // 1. Check if the admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log("Admin user already exists. Skipping creation. ✅");
  } else {
    // 2. If the user doesn't exist, create them
    console.log("Admin user not found, creating new admin...");
    const hashedPassword = await bcrypt.hash(adminPassword, BCRYPT_SALT_ROUNDS);

    const newAdmin = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
      },
    });
    console.log(`Admin user created successfully: ${newAdmin.email} 🌱`);
  }
}

// Execute the main function and handle errors
main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    // Ensure Prisma Client disconnects after the script runs
    await prisma.$disconnect();
  });
