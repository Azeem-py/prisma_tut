import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  //we are just delete so we won't have to make changes to the data with unique constraint
  await prisma.user.deleteMany({})
  const user = await prisma.user.create({
    data: {
      name: 'Azeem',
      age: 20,
      email: 'azeem@prisma.com',
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // include: {
    //   userPreference: true,
    // }, //can be used to join related tables
    select: {
      name: true,
      userPreference: { select: { emailUpdates: true } },
    },
  })
  console.log(user)
}

main().catch((e) => console.log(e.message))
