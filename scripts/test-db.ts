import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { email: "test@example.com", name: "Test User" },
  });
  console.log("Created user:", user);

  const users = await prisma.user.findMany();
  console.log("All users:", users);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
