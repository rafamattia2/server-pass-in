import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "ac0d5565-eaa7-4e6f-9614-c192cfa48476",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento p/ devs apaixonados por código",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
