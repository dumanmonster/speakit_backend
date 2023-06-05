// prisma/seed.ts
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;
async function main() {
  console.log('fsdfsd');
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
