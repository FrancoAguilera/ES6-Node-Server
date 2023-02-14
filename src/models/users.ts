import { Schema, model } from "mongoose";

// 1. interface representing the document in MongoDB.
interface IUsers {
  name: String;
  email: String;
  gender: String;
  bio: String;
  dob: Date;
  picture: String;
  rank: Number;
  isActive: Boolean;
}

// 2. Schema corresponding to the document interface.
const userSchema = new Schema<IUsers>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: String,
  bio: String,
  dob: { type: Date, required: true },
  picture: { type: String, required: true },
  rank: Number,
  isActive: { type: Boolean, required: true },
});

// 3. Create a Model.
const Users = model<IUsers>("Users", userSchema);

export { Users };
