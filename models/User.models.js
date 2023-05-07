import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true },
  profile: { type: String, required: true },
});

const Users = model("User", UserSchema);

export default Users;
