"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react"; // Explicitly importing React

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
// Removed: import Link from "next/link";
// Using standard HTML anchor tag <a href="..."> instead to resolve the build error.
import { Box, Mail, RotateCcw } from "lucide-react"; // Icons for verification and resend
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";

// 1. Define the form schema for Email Validation Code.
const formSchema = z.object({
  // Typically a 6-digit code
  code: z
    .string()
    .length(6, { message: "The code must be exactly 6 characters." })
    .regex(/^\d+$/, { message: "The code must only contain numbers." }),
});

// Define the type for form values
type EmailValidationFormValues = z.infer<typeof formSchema>;

// Example of the email address that was used for sign-up (you would pass this as a prop)
const verificationEmail = "user@example.com";

export default function FormEmailValidation() {
  // 2. Define the form.
  const form = useForm<EmailValidationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  // 3. Define a submit handler.
  function onSubmit(values: EmailValidationFormValues) {
    console.log("Attempting to validate code:", values.code);
    // Add your actual API call to verify the code here
  }

  // 4. Handler for resending the code (simulated)
  function handleResend() {
    console.log("Resend code requested for:", verificationEmail);
    // Add your actual API call to resend the code here
  }

  return (
    // Outer container to center the form on the page
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Container for the form structure */}
      <div className="w-full max-w-sm space-y-8">
        {/* Icon and Title Section */}
        <div className="flex flex-col items-start text-start space-y-4">
          <Image src="/logo_page.png" alt="Logo" width={400} height={100} />

          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-primary">Verify</span> Your Email
          </h1>
          <p className="text-sm text-muted-foreground">
            We've sent a 6-digit code to{" "}
            <span className="font-semibold text-foreground">
              {verificationEmail}
            </span>
            . Please enter it below to confirm your account.
          </p>
        </div>

        {/* The Form Content */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Code Field */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Enter your OTP</FormLabel> */}
                    <FormControl>
                      <InputOTP maxLength={6} {...field} className="w-full">
                        <InputOTPGroup className="w-full justify-between">
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <InputOTPSlot
                              key={i}
                              index={i}
                              className="border rounded-sm w-12 h-12"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Verify Account
              </Button>
            </form>
          </Form>
        </div>

        {/* Resend and Change Email Links */}
        <div className="text-start text-sm space-y-3">
          <p className="text-muted-foreground">
            Didn't receive the code?{" "}
            <Button variant={"link"}>Resend Code</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
