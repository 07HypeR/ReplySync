<<<<<<< HEAD
'use client';

import { SessionProvider } from 'next-auth/react';
=======
"use client";

import { SessionProvider } from "next-auth/react";
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}



=======
  return <SessionProvider>{children}</SessionProvider>;
}
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
