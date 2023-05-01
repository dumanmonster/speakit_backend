// prisma/seed.ts
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;
async function main() {
  // create two dummy definitions
  const passwordSabin = await bcrypt.hash('password-sabin', roundsOfHashing);
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {
      password: passwordSabin,
    },
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: passwordSabin,
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
