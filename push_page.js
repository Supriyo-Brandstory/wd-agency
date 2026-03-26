const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const content = fs.readFileSync(path.join(__dirname, 'industry-inner-page-template.html'), 'utf-8');
  const title = "Industry Inner Page Template";
  const slug = "industry-inner-page-template";
  const cssFile = "style-1.css";

  const existingPage = await prisma.customPage.findUnique({
    where: { slug },
  });

  if (existingPage) {
    await prisma.customPage.update({
      where: { slug },
      data: {
        title,
        content,
        cssFile,
      },
    });
    console.log(`Page updated: ${slug}`);
  } else {
    await prisma.customPage.create({
      data: {
        title,
        slug,
        content,
        cssFile,
      },
    });
    console.log(`Page created: ${slug}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
