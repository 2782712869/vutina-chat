import mongoose from "mongoose";
import short from "short-uuid";

export type User = {
  telephone: number,
  password: string
}

const translator = short()
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    default: () => translator.new(),
    unique: true
  },
  telephone: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const UserModel = mongoose.model('user', UserSchema);

export const createUser = async (user: User) => {
  return (await new UserModel(user).save()).toObject()
}

export const getUser = async (telephone: number) => {
  return (await UserModel.findOne({ telephone }))?.toObject()
}

export const deleteUser = async (id: string) => {
  return (await UserModel.findByIdAndDelete(id)).toObject()
}

export const patchUser = async (id: string, value: Partial<User>) => {
  return (await UserModel.findByIdAndUpdate(id, value, { new: true })).toObject()
}
