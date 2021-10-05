import ProductUser from "./user.js";
import Database from "./connection.js";
import mongoose from "mongoose";

const productUserOne = {
  email: "rudheshp@gmail.com",
  password: "password",
};

const productUserTwo = {
  email: "rudheshr@gmail.com",
  password: "password",
  role: "Admin",
};

const productUserThree = {
  email: "rudheshd@gmail.com",
  password: "password",
  role: "User",
};

const db = new Database();

await db.connect();

await ProductUser.create(productUserOne);
await ProductUser.create(productUserTwo);
await ProductUser.create(productUserThree);

await mongoose.disconnect();
