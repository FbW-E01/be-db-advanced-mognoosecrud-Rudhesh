import Database from "./connection.js";
import mongoose from "mongoose";
import ProductUser from "./user.js";

const db = new Database();

await db.connect();

const { userOne, userTwo, users } = ProductUser;

console.log(ProductUser);

await ProductUser.deleteOne(userOne);

await mongoose.disconnect();
