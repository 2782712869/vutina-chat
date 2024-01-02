import { Request, Response } from 'express';
import { createUser, UserInfoType, getUser } from '../models/users';
import { authentication, random } from '../helpers';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as UserInfoType;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Fetch user from the database
    const user = await getUser({ username });
    console.log(user)

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Validate user's password (without encryption for simplicity)
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Assuming you have a function to generate and manage authentication tokens
    const authToken = generateAuthToken(username);

    return res.status(200).json({ token: authToken, message: 'Login successful.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as UserInfoType;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Check if the username is already taken
    const existingUser = await getUser({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists.' });
    }

    const newUser: UserInfoType = {
      username,
      password, // Storing password as-is (without encryption) for simplicity
    };

    await createUser(newUser);

    return res.status(201).json({ message: 'Registration successful.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to generate and manage authentication tokens
const generateAuthToken = (username: string): string => {
  // Your token generation logic goes here
  return `your_generated_token_for_${username}`;
};

