<<<<<<< HEAD
'use client';

import { ApiResponse } from '@/types/ApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'usehooks-ts';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
=======
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/schemas/signInSchema";
import { signUpSchema } from "@/schemas/signUpSchema";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import {
  Form,
  FormControl,
  FormDescription,
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
<<<<<<< HEAD
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signUpSchema } from '@/schemas/signUpSchema';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debouncedUsername = useDebounce(username, 300);

  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const page = () => {
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debounced = useDebounceCallback(setUsername, 300);
  const { toast } = useToast();
  const router = useRouter();

  //zod implementation
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
    },
  });

  useEffect(() => {
    const checkUsernameUnique = async () => {
<<<<<<< HEAD
      if (debouncedUsername) {
        setIsCheckingUsername(true);
        setUsernameMessage(''); // Reset message
        try {
          const response = await axios.get<ApiResponse>(
            `/api/check-username-unique?username=${debouncedUsername}`
=======
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          const response = await axios.get(
            `/api/check-username-unique?username=${username}`
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
          );
          setUsernameMessage(response.data.message);
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>;
          setUsernameMessage(
<<<<<<< HEAD
            axiosError.response?.data.message ?? 'Error checking username'
=======
            axiosError.response?.data.message ?? "Error checking username"
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
          );
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkUsernameUnique();
<<<<<<< HEAD
  }, [debouncedUsername]);
=======
  }, [username]);
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true);
    try {
<<<<<<< HEAD
      const response = await axios.post<ApiResponse>('/api/sign-up', data);

      toast({
        title: 'Success',
        description: response.data.message,
      });

      router.replace(`/verify/${username}`);

      setIsSubmitting(false);
    } catch (error) {
      console.error('Error during sign-up:', error);

      const axiosError = error as AxiosError<ApiResponse>;

      // Default error message
      let errorMessage = axiosError.response?.data.message;
      ('There was a problem with your sign-up. Please try again.');

      toast({
        title: 'Sign Up Failed',
        description: errorMessage,
        variant: 'destructive',
      });

=======
      const response = await axios.post<ApiResponse>("/api/sign-up", data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      router.replace(`/verify/${username}`);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error in signup of user", error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
=======
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Join ReplySync
          </h1>
          <p className="mb-4">Sign up to start your anonymous adventure</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
<<<<<<< HEAD
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setUsername(e.target.value);
                    }}
                  />
                  {isCheckingUsername && <Loader2 className="animate-spin" />}
                  {!isCheckingUsername && usernameMessage && (
                    <p
                      className={`text-sm ${
                        usernameMessage === 'Username is unique'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {usernameMessage}
                    </p>
                  )}
=======
                  <FormControl>
                    <Input
                      placeholder="username"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        debounced(e.target.value);
                      }}
                    />
                  </FormControl>
                  {isCheckingUsername && <Loader2 className="animated-spin" />}
                  <p
                    className={`text-sm ${
                      usernameMessage === "Username is unique"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {usernameMessage}
                  </p>
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
<<<<<<< HEAD
                  <FormLabel>Email</FormLabel>
                  <Input {...field} name="email" />
                  <p className='text-muted text-gray-400 text-sm'>We will send you a verification code</p>
=======
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
                  <FormMessage />
                </FormItem>
              )}
            />
<<<<<<< HEAD

=======
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
<<<<<<< HEAD
                  <Input type="password" {...field} name="password" />
=======
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
                  <FormMessage />
                </FormItem>
              )}
            />
<<<<<<< HEAD
            <Button type="submit" className='w-full' disabled={isSubmitting}>
=======
            <Button type="submit" disabled={isSubmitting}>
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
<<<<<<< HEAD
                'Sign Up'
=======
                "Signup"
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
              )}
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
<<<<<<< HEAD
            Already a member?{' '}
=======
            Already a member?{""}
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
            <Link href="/sign-in" className="text-blue-600 hover:text-blue-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}

=======
};

export default page;
>>>>>>> 8fbcf00e06b6c3eeef1f4965779aa033408fedec
