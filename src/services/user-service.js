const prisma = require("../models/prisma");

const userService = {};

userService.createUser = (data) => prisma.user.create({ data });
userService.findUserByUsername = (username) =>
  prisma.user.findFirst({
    where: { username: username },
  });

userService.findUserById = (userId) =>
  prisma.user.findUnique({ where: { id: userId } });

userService.updateUserById = (userId, data) =>
  prisma.user.update({
    where: {
      id: userId,
    },
    data,
  });

userService.deleteUserById = (userId) =>
  prisma.user.delete({
    where: { id: userId },
  });

userService.getAllUser = () => prisma.user.findMany();

module.exports = userService;
