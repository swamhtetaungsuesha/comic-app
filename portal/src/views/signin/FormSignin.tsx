// FormSignin.tsx

"use client"; // Still essential for useForm!

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Box, Folder } from "lucide-react";

// 1. Define the form schema for Sign In.
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

// Define the type for form values
type SignInFormValues = z.infer<typeof formSchema>;

export default function FormSignin() {
  // 2. Define the form.
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 3. Define a submit handler.
  function onSubmit(values: SignInFormValues) {
    console.log("Attempting sign-in with:", values);
    // Add your actual authentication logic here
  }

  return (
    // Outer container to center the form on the page
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Container for the form structure - replacing the Card */}
      <div className="w-full max-w-sm  space-y-6  ">
        <div className="rounded-full border-3 p-5 w-max bg-accent">
          <Box size={100} />
        </div>
        {/* Title and Description Section */}
        <div className="text-start space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-primary">Sign In</span> to Your Account
          </h1>
          <p className="text-sm text-gray-500">
            Enter your email and password below to access your dashboard.
          </p>
        </div>

        {/* The Form Content */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Optional: Add a link for registration/forgot password */}
              <div className="text-start text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-primary hover:underline font-medium"
                >
                  Sign Up
                </Link>
              </div>

              {/* Sign In Button */}
              <Button type="submit" className="w-full">
                LOGIN
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
