import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
<<<<<<< HEAD
import { ApiResponse } from '@/types/ApiResponse';
=======
import { ApiResponse } from "@/types/ApiResponse";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
<<<<<<< HEAD
      from: 'dev@hiteshchoudhary.com',
      to: email,
      subject: 'Mystery Message Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
=======
      from: "dev@hiteshchoudhary.com",
      to: email,
      subject: "Mystery Message Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email." };
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  }
}
