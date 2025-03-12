"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { SocialSignIn } from "../SocialSignin";
import { signinFormSchema } from "@/validations/Validations";

interface SignInFormProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SigninForm = ({ signInWithEmail, clerkError }: SignInFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof signinFormSchema>) => {
    setIsSubmitting(true);
    try {
      await signInWithEmail({
        emailAddress: values.email,
        password: values.password,
      });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-96 max-w-2xl mx-auto hover:border-primary">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold text-white">
          Sign in
        </CardTitle>
        <CardDescription className="text-slate-400">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-slate-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-slate-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {clerkError && (
              <div className="text-red-400 text-sm py-2">{clerkError}</div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign in
            </Button>
          </form>
        </Form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full border-slate-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        <SocialSignIn />
      </CardContent>
      <CardFooter className="flex justify-between flex-col space-y-4">
        <p className="text-sm text-slate-400 text-center w-full">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-slate-200 hover:text-white underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
        {/* <Button
          variant="link"
          className="text-slate-400 hover:text-white p-0 h-auto"
        >
          <Link href="/forgot-password">Forgot your password?</Link>
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default SigninForm;
