// FormSignup.tsx

"use client";

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
import { Box } from "lucide-react";

// 1. Define the form schema for Sign Up.
const formSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
  })
  // Refine the schema to ensure password and confirmPassword match
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // Apply the error message to the confirmPassword field
  });

// Define the type for form values
type SignUpFormValues = z.infer<typeof formSchema>;

export default function FormSignup() {
  // 2. Define the form.
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 3. Define a submit handler.
  function onSubmit(values: SignUpFormValues) {
    // Before sending data, we typically omit the confirmPassword field
    const { confirmPassword, ...dataToSend } = values;
    console.log("Attempting sign-up with:", dataToSend);
    // Add your actual registration API call here
  }

  return (
    // Outer container to center the form on the page
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Container for the form structure */}
      <div className="w-full max-w-md space-y-6 ">
        <div className="rounded-full border-3 p-5 w-max bg-accent">
          <Box size={100} />
        </div>
        {/* Title and Description Section */}
        <div className="text-start space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-primary">Create</span> Your Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to get started.
          </p>
        </div>

        {/* The Form Content */}
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4" // Slightly smaller space for more fields
            >
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Choose a username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              {/* Confirm Password Field */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Re-enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Optional: Add a link for sign in */}
              <div className="text-start text-sm text-muted-foreground pt-2">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-primary hover:underline font-medium"
                >
                  Sign In
                </Link>
              </div>

              {/* Sign Up Button */}
              <Button type="submit" className="w-full">
                SIGNUP
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
