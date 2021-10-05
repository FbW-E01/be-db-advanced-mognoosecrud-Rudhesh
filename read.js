import Database from "./connection.js";
import mongoose from "mongoose";
import ProductUser from "./user.js";

const db = new Database();

await db.connect();

let msg = await ProductUser.find();

console.log(msg);

await mongoose.disconnect();
