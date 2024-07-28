require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  await prisma.$executeRawUnsafe("DROP database toi_nurse_uniform");
  await prisma.$executeRawUnsafe("CREATE database toi_nurse_uniform");
}
console.log("Reset DB..");
run();
