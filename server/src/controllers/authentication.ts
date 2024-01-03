import { Request, Response } from 'express';
import { createUser, getUser } from '../models/users';
import { hashPassword } from '../helpers' 

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const _hashPassword = hashPassword(password)
    const user = await getUser({ username, password: _hashPassword });
    if (user?.password !== _hashPassword) {
      return res.status(401).json({ error: '用户名或密码不正确' });
    }
    res.status(200).json(user);
  } catch(err) {
    console.error(err)
    res.status(500).json({ error: '服务器错误' });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const _hashPassword = hashPassword(password)

    const existingUser = await getUser({ username });
    if (existingUser) {
      return res.status(400).json({ error: '用户名已存在' });
    }
    const newUser = await createUser({ username, password: _hashPassword })

    res.status(200).json(newUser);
  } catch(err) {
    console.error(err)
    res.status(500).json({ error: '服务器错误' });
  }
};
