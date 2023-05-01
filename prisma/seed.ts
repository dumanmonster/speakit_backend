// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy definitions

  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {},
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: 'password-sabin',
    },
  });
  const def1 = await prisma.definition.upsert({
    where: { word: 'Banana' },
    update: {},
    create: {
      word: 'Banana',
      description: 'Banana is Fruit',
    },
  });

  const def2 = await prisma.definition.upsert({
    where: { word: 'Potato' },
    update: {},
    create: {
      word: 'Potato',
      description: 'Potato is Vegetable',
    },
  });

  console.log({ def1, def2, user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
