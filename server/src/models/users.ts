import mongoose from "mongoose";

export type UserInfoType = {
  username: string;
  password: string;
  avatar?: string;
  sign?: string;
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
  sign: String,
});

export const userModle = mongoose.model("user", userSchema);

export const getUser = (filter: Partial<UserInfoType> = {}) =>
  userModle.findOne(filter);
export const createUser = (info: UserInfoType) =>
  new userModle(info).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  userModle.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, info: Partial<UserInfoType>) =>
  userModle
    .findByIdAndUpdate(id, info, { new: true })
    .then((user) => user.toObject());
export const getUserById = (id: string) => userModle.findById(id);
