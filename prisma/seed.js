const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seed() {
  const email = 'admin@mail.com';
  const password = '123456';

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.admin.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    console.log('Admin user created successfully.');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
