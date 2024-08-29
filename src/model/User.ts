<<<<<<< HEAD
import mongoose, { Schema, Document } from 'mongoose';
=======
import mongoose, { Schema, Document } from "mongoose";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
<<<<<<< HEAD
  verifyCodeExpiry: Date; 
=======
  verifyCodeExpiry: Date;
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({
  username: {
    type: String,
<<<<<<< HEAD
    required: [true, 'Username is required'],
=======
    required: [true, "Username is required"],
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
    trim: true,
    unique: true,
  },
  email: {
    type: String,
<<<<<<< HEAD
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  verifyCode: {
    type: String,
    required: [true, 'Verify Code is required'],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry is required'],
=======
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify Code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry is required"],
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
<<<<<<< HEAD
  mongoose.model<User>('User', UserSchema);
=======
  mongoose.model<User>("User", UserSchema);
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export default UserModel;
