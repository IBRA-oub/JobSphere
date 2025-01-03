import dbConnect from "@/lib/config/mongodb"
import UserSchema from "@/lib/backend/models/users";
import * as bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
export const AuthController = {
  async register(req) {
    try {
      await dbConnect();
      const { fullName, phoneNumber, email, password } = await req.json();

      const existingUser = await UserSchema.findOne({ email });
      if (existingUser) {
        return { message: "User already exists.", status: 409 };
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserSchema({
        fullName,
        phoneNumber,
        email,
        password: hashedPassword,
      });

      const user = await newUser.save();

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          fullName: user.fullName,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      return { message: "User registered successfully.", status: 201, user, token };
    } catch (error) {
      console.error(error);
      return { message: "An error occurred during registration.", status: 500 };
    }
  },

  async login(req) {
    try {
      await dbConnect();
      const { email, password } = await req.json();
  
      const existingUser = await UserSchema.findOne({ email });
      if (!existingUser) {
        return { message: "Invalid email.", status: 401 };
      }

      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid) {
        return { message: "Invalid password.", status: 401 };
      }
      const token = jwt.sign(
        {
          id: existingUser._id,
          email: existingUser.email,
          fullName: existingUser.fullName,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" } 
      );

      return { message: "User loging successfully.", status: 200, existingUser, token };
    } catch (error) {
      console.error(error);
      return { message: "An error occurred during login.", status: 500 };
    }
  },
}