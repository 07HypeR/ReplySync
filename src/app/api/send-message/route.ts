<<<<<<< HEAD
import UserModel from '@/model/User';
import dbConnect from '@/lib/dbConnect';
import { Message } from '@/model/User';
=======
import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { Message } from "@/model/User";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export async function POST(request: Request) {
  await dbConnect();
  const { username, content } = await request.json();

  try {
    const user = await UserModel.findOne({ username }).exec();

    if (!user) {
      return Response.json(
<<<<<<< HEAD
        { message: 'User not found', success: false },
=======
        { message: "User not found", success: false },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        { status: 404 }
      );
    }

    // Check if the user is accepting messages
    if (!user.isAcceptingMessages) {
      return Response.json(
<<<<<<< HEAD
        { message: 'User is not accepting messages', success: false },
=======
        { message: "User is not accepting messages", success: false },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        { status: 403 } // 403 Forbidden status
      );
    }

    const newMessage = { content, createdAt: new Date() };

    // Push the new message to the user's messages array
    user.messages.push(newMessage as Message);
    await user.save();

    return Response.json(
<<<<<<< HEAD
      { message: 'Message sent successfully', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding message:', error);
    return Response.json(
      { message: 'Internal server error', success: false },
=======
      { message: "Message sent successfully", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding message:", error);
    return Response.json(
      { message: "Internal server error", success: false },
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      { status: 500 }
    );
  }
}
