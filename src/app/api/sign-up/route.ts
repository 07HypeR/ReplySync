<<<<<<< HEAD
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
=======
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    const existingVerifiedUserByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUserByUsername) {
      return Response.json(
        {
          success: false,
<<<<<<< HEAD
          message: 'Username is already taken',
=======
          message: "Username is already taken",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
        },
        { status: 400 }
      );
    }

    const existingUserByEmail = await UserModel.findOne({ email });
    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return Response.json(
          {
            success: false,
<<<<<<< HEAD
            message: 'User already exists with this email',
=======
            message: "User already exists with this email",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserByEmail.password = hashedPassword;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await existingUserByEmail.save();
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessages: true,
        messages: [],
      });

      await newUser.save();
    }

    // Send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );
    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
<<<<<<< HEAD
        message: 'User registered successfully. Please verify your account.',
=======
        message: "User registered successfully. Please verify your account.",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      },
      { status: 201 }
    );
  } catch (error) {
<<<<<<< HEAD
    console.error('Error registering user:', error);
    return Response.json(
      {
        success: false,
        message: 'Error registering user',
=======
    console.error("Error registering user:", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      },
      { status: 500 }
    );
  }
}
