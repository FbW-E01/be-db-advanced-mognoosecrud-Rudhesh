import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, min: 8 },
  role: { type: String, default: "User" },
});

const ProductUser = mongoose.model("productUser", userSchema);

export default ProductUser;
