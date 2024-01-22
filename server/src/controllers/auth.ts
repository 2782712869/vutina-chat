import { Context } from "koa";
import { createUser, getUser, User } from "@models/users";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export async function login(ctx: Context) {
  const { telephone, password } = ctx.request.body as User;
  const existingUser = await getUser(telephone);

  if (existingUser) {
    return (ctx.body = JSON.stringify({
      code: 0,
      msg: "该手机号已注册",
    }));
  }
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  const user = await createUser({
    telephone,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { userId: user._id, telephone: user.telephone },
    "VUTINA-WEB-CHAT-APP",
    { expiresIn: "1d" }
  );

  ctx.body = JSON.stringify({
    code: 1,
    msg: "登录成功",
    data: {
      user: user,
      token: token,
    },
  });
}
