const { PrismaClient, role } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const password = bcrypt.hashSync("123456");

const userData = [
  {
    username: "admin",
    password,
    firstName: "Somkit",
    lastName: "Yimyuean",
    email: "toi_nurseuniform@gmail.com",
    phoneNo: "0818350179",
    sex: "Female",
    role: "ADMIN",
  },
  {
    username: "juneajmnf",
    password,
    firstName: "Atjima",
    lastName: "Nuchfang",
    email: "juneajmnf@gmail.com",
    phoneNo: "0814562097",
    sex: "Female",
    role: "USER",
  },

  {
    username: "user01",
    password,
    firstName: "user1",
    lastName: "userja",
    email: "",
    phoneNo: "0812345678",
    sex: "Male",
    role: "USER",
  },
  {
    username: "user02",
    password,
    firstName: "user2",
    lastName: "wooooo",
    email: "user02@gmail.com",
    phoneNo: "0816543265",
    sex: "Female",
    role: "USER",
  },
  {
    username: "user03",
    password,
    firstName: "user3",
    lastName: "rtkopt",
    email: "user03@gmail.com",
    phoneNo: "0816543267",
    sex: "Female",
    role: "USER",
  },
];

const shapeData = [
  {
    neckToWaist: 39.0,
    backLength: 40.0,
    shoulderWidth: 37.0,
    chestWidth: 31.0,
    backWidth: 32.0,
    armholdDepth: 38.0,
    aroundBust: 81.0,
    bustSeparation: 17.0,
    bustHeight: 21.0,
    aroundWaist: 67.0,
    hightHip: 30.5,
    aroundHip: 95.0,
    skirtLength: 0,
    Arm: 23.0,
    wrist: 26.0,
    shirtLength: 23.0,
    thigh: 54.0,
    crothLength: 25.5,
    trousersLength: 96.0,
    userId: 2,
  },
  {
    neckToWaist: 36.0,
    backLength: 37.0,
    shoulderWidth: 32.0,
    chestWidth: 31.0,
    backWidth: 31.0,
    armholdDepth: 37.0,
    aroundBust: 81.0,
    bustSeparation: 17.0,
    bustHeight: 21.0,
    aroundWaist: 75.0,
    hightHip: 31.5,
    aroundHip: 100.0,
    skirtLength: 44.0,
    Arm: 54.0,
    wrist: 16.0,
    shirtLength: 18.0,
    thigh: 58.0,
    crothLength: 25.5,
    trousersLength: 89.0,
    userId: 3,
  },
  {
    neckToWaist: 35.0,
    backLength: 36.0,
    shoulderWidth: 33.0,
    chestWidth: 31.0,
    backWidth: 31.0,
    armholdDepth: 32.0,
    aroundBust: 75.0,
    bustSeparation: 15.0,
    bustHeight: 19.0,
    aroundWaist: 63.0,
    hightHip: 27.5,
    aroundHip: 87.0,
    skirtLength: 0,
    Arm: 22.0,
    wrist: 22.0,
    shirtLength: 23.0,
    thigh: 50.0,
    crothLength: 23.0,
    trousersLength: 91.0,
    userId: 4,
  },
  {
    neckToWaist: 34.0,
    backLength: 40.0,
    shoulderWidth: 37.0,
    chestWidth: 32.0,
    backWidth: 34.0,
    armholdDepth: 39.0,
    aroundBust: 84.0,
    bustSeparation: 17.0,
    bustHeight: 21.0,
    aroundWaist: 74.0,
    hightHip: 30.0,
    aroundHip: 94.0,
    skirtLength: 54.0,
    Arm: 57.0,
    wrist: 16.0,
    shirtLength: 20.0,
    thigh: 0,
    crothLength: 0,
    trousersLength: 0,
    userId: 5,
  },
  {
    neckToWaist: 1.0,
    backLength: 1.0,
    shoulderWidth: 37.0,
    chestWidth: 31.0,
    backWidth: 32.0,
    armholdDepth: 38.0,
    aroundBust: 81.0,
    bustSeparation: 17.0,
    bustHeight: 21.0,
    aroundWaist: 67.0,
    hightHip: 30.5,
    aroundHip: 95.0,
    skirtLength: 0,
    Arm: 23.0,
    wrist: 26.0,
    shirtLength: 23.0,
    thigh: 54.0,
    crothLength: 25.5,
    trousersLength: 1.0,
    userId: 2,
  },
];

const productData = [
  {
    productName: "nurseUniform1",
    price: 1300.0,
  },
];

// const orderData = [
//   {
//     userId: 1,
//     shapeId: 1,
//     orderStatus: "FINISHED",
//   },
//   {
//     userId: 2,
//     shapeId: 2,
//     orderStatus: "PENDING",
//   },
//   {
//     userId: 1,
//     shapeId: 5,
//     orderStatus: "PROCESSING",
//   },
//   {
//     userId: 3,
//     shapeId: 3,
//     orderStatus: "PROCESSING",
//   },
//   {
//     userId: 4,
//     shapeId: 4,
//     orderStatus: "PENDING",
//   },
// ];

// const orderItemsData = [
//   {
//     orderId: 1,
//     productId: 1,
//     productQuantity: 1,
//   },
//   {
//     orderId: 2,
//     productId: 1,
//     productQuantity: 3,
//   },
//   {
//     orderId: 3,
//     productId: 1,
//     productQuantity: 3,
//   },
//   {
//     orderId: 4,
//     productId: 1,
//     productQuantity: 2,
//   },
//   {
//     orderId: 5,
//     productId: 1,
//     productQuantity: 1,
//   },
// ];

const run = async () => {
  await prisma.user.createMany({ data: userData });
  await prisma.body_measurement.createMany({ data: shapeData });
  await prisma.product.createMany({ data: productData });
  //   await prisma.order.createMany({ data: orderData });
  //   await prisma.order_items.createMany({ data: orderItemsData });
};

run();
