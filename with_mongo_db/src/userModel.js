import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

//const User = mongoose.model(MODEL_name, OUR_SCHEME, OUR_MODEL_NAME_STRICTLY<OPTIONAL>);
const User = mongoose.model("User", userSchema, "User");
export default User;