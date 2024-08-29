<<<<<<< HEAD
import 'next-auth';

declare module 'next-auth' {
=======
import "next-auth";

declare module "next-auth" {
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessages?: boolean;
      username?: string;
<<<<<<< HEAD
    } & DefaultSession['user'];
=======
    } & DefaultSession["user"];
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  }

  interface User {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}

<<<<<<< HEAD
declare module 'next-auth/jwt' {
=======
declare module "next-auth/jwt" {
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}
