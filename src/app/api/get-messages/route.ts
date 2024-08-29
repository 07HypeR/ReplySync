<<<<<<< HEAD
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import mongoose from 'mongoose';
import { User } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/options';
=======
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import mongoose from "mongoose";
import { User } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export async function GET(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const _user: User = session?.user;

  if (!session || !_user) {
    return Response.json(
<<<<<<< HEAD
      { success: false, message: 'Not authenticated' },
=======
      { success: false, message: "Not authenticated" },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 401 }
    );
  }
  const userId = new mongoose.Types.ObjectId(_user._id);
  try {
    const user = await UserModel.aggregate([
      { $match: { _id: userId } },
<<<<<<< HEAD
      { $unwind: '$messages' },
      { $sort: { 'messages.createdAt': -1 } },
      { $group: { _id: '$_id', messages: { $push: '$messages' } } },
=======
      { $unwind: "$messages" },
      { $sort: { "messages.createdAt": -1 } },
      { $group: { _id: "$_id", messages: { $push: "$messages" } } },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
    ]).exec();

    if (!user || user.length === 0) {
      return Response.json(
<<<<<<< HEAD
        { message: 'User not found', success: false },
=======
        { message: "User not found", success: false },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        { status: 404 }
      );
    }

    return Response.json(
      { messages: user[0].messages },
      {
        status: 200,
      }
    );
  } catch (error) {
<<<<<<< HEAD
    console.error('An unexpected error occurred:', error);
    return Response.json(
      { message: 'Internal server error', success: false },
=======
    console.error("An unexpected error occurred:", error);
    return Response.json(
      { message: "Internal server error", success: false },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 500 }
    );
  }
}
