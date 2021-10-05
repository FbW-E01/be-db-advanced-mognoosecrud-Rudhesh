import mongoose from "mongoose";

const username = "jimmy";
const password = "password";
const db = "exampledb";

const connectionString = `mongodb://${username}:${password}@localhost:27017/${db}`;

mongoose.connection.on("error", (er) => console.log("EEROR", er));
mongoose.connection.on("connected", () => console.log("connected"));
mongoose.connection.on("disconnected", () => console.log("disconnected"));

export default class Database {
  async connect() {
    return await mongoose.connect(connectionString);
  }
}
