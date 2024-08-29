<<<<<<< HEAD
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/options';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { User } from 'next-auth';
=======
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export async function POST(request: Request) {
  // Connect to the database
  await dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user;
  if (!session || !session.user) {
    return Response.json(
<<<<<<< HEAD
      { success: false, message: 'Not authenticated' },
=======
      { success: false, message: "Not authenticated" },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 401 }
    );
  }

  const userId = user._id;
  const { acceptMessages } = await request.json();

  try {
    // Update the user's message acceptance status
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { isAcceptingMessages: acceptMessages },
      { new: true }
    );

    if (!updatedUser) {
      // User not found
      return Response.json(
        {
          success: false,
<<<<<<< HEAD
          message: 'Unable to find user to update message acceptance status',
=======
          message: "Unable to find user to update message acceptance status",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        },
        { status: 404 }
      );
    }

    // Successfully updated message acceptance status
    return Response.json(
      {
        success: true,
<<<<<<< HEAD
        message: 'Message acceptance status updated successfully',
=======
        message: "Message acceptance status updated successfully",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
<<<<<<< HEAD
    console.error('Error updating message acceptance status:', error);
    return Response.json(
      { success: false, message: 'Error updating message acceptance status' },
=======
    console.error("Error updating message acceptance status:", error);
    return Response.json(
      { success: false, message: "Error updating message acceptance status" },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 500 }
    );
  }
}

<<<<<<< HEAD

=======
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
export async function GET(request: Request) {
  // Connect to the database
  await dbConnect();

  // Get the user session
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // Check if the user is authenticated
  if (!session || !user) {
    return Response.json(
<<<<<<< HEAD
      { success: false, message: 'Not authenticated' },
=======
      { success: false, message: "Not authenticated" },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 401 }
    );
  }

  try {
    // Retrieve the user from the database using the ID
    const foundUser = await UserModel.findById(user._id);

    if (!foundUser) {
      // User not found
      return Response.json(
<<<<<<< HEAD
        { success: false, message: 'User not found' },
=======
        { success: false, message: "User not found" },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        { status: 404 }
      );
    }

    // Return the user's message acceptance status
    return Response.json(
      {
        success: true,
        isAcceptingMessages: foundUser.isAcceptingMessages,
      },
      { status: 200 }
    );
  } catch (error) {
<<<<<<< HEAD
    console.error('Error retrieving message acceptance status:', error);
    return Response.json(
      { success: false, message: 'Error retrieving message acceptance status' },
=======
    console.error("Error retrieving message acceptance status:", error);
    return Response.json(
      { success: false, message: "Error retrieving message acceptance status" },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 500 }
    );
  }
}
