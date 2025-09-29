import { Server } from "http";
import app from "./app";
import config from "./config";
import prisma from "./shared/prisma";

async function ConnectToDB() {
  try {
    await prisma.$connect();
    console.log(`✅ Database connected successful`);
  } catch (error) {
    console.log(`❌ Database connection failed:`, error);
    process.exit(1);
  }
}

async function main() {
  await ConnectToDB();

  const server: Server = app.listen(config.port, () => {
    console.log(`🚀 Server is running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.info("Server closed");
      });
    }
    process.exit(1);
  };

  process.on("uncaughtException", (error) => {
    console.error(error);
    exitHandler();
  });

  process.on("unhandledRejection", (error) => {
    console.error(error);
    exitHandler();
  });
}

main();
