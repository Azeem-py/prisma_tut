import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  //we are just delete so we won't have to make changes to the data with unique constraint
  await prisma.user.deleteMany({})
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'Azeem',
        age: 29,
        email: 'azeem@prisma.com',
      },
      {
        name: 'Wasiu',
        age: 21,
        email: 'wasiu@prisma.com',
      },
    ],
  })
  console.log(users)
}

main().catch((e) => console.log(e.message))
