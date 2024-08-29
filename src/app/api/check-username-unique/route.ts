<<<<<<< HEAD
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import { z } from 'zod';
import { usernameValidation } from '@/schemas/signUpSchema';
=======
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from "zod";
import { usernameValidation } from "@/schemas/signUpSchema";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParams = {
<<<<<<< HEAD
      username: searchParams.get('username'),
=======
      username: searchParams.get("username"),
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
    };

    const result = UsernameQuerySchema.safeParse(queryParams);

    if (!result.success) {
      const usernameErrors = result.error.format().username?._errors || [];
      return Response.json(
        {
          success: false,
          message:
            usernameErrors?.length > 0
<<<<<<< HEAD
              ? usernameErrors.join(', ')
              : 'Invalid query parameters',
=======
              ? usernameErrors.join(", ")
              : "Invalid query parameters",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        },
        { status: 400 }
      );
    }

    const { username } = result.data;

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
<<<<<<< HEAD
          message: 'Username is already taken',
=======
          message: "Username is already taken",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        },
        { status: 200 }
      );
    }

    return Response.json(
      {
        success: true,
<<<<<<< HEAD
        message: 'Username is unique',
=======
        message: "Username is unique",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      },
      { status: 200 }
    );
  } catch (error) {
<<<<<<< HEAD
    console.error('Error checking username:', error);
    return Response.json(
      {
        success: false,
        message: 'Error checking username',
=======
    console.error("Error checking username:", error);
    return Response.json(
      {
        success: false,
        message: "Error checking username",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      },
      { status: 500 }
    );
  }
}
