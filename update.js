import Database from "./connection.js";
import mongoose from "mongoose";
import ProductUser from "./user.js";

const db = new Database();

await db.connect();
let user = await ProductUser.findOne();

user.password = "potato";
user = await user.save();
console.log(user);
await mongoose.disconnect();
