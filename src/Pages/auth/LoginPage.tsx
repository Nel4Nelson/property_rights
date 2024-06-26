/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "@/firebase/firebase";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";


const schema = z.object({
  email: z.string().email({ message: "Enter a Valid Email Address" }),
  password: z
    .string()
    .min(6, { message: "Password must be more than 6 characters" }),
});

type formData = z.infer<typeof schema>;

const LoginPage = () => {
  //States
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  //Hooks
  const navigate = useNavigate();
  const { toast } = useToast();

  //React hook form
  const form = useForm<formData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (values: formData) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user: any = userCredential.user;
        localStorage.setItem("jwt", user.accessToken);
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${error.message}`,
        });
      });
  };

  const toggleEye = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full h-dvh lg:grid lg:gap-3 lg:grid-cols-2 font-bodyFont bg-custom-white_200">
      <div className="hidden lg:block lg:h-screen">
       <h1 className="lg:flex lg:justify-center lg:items-center lg:h-screen">
         Property rights Branded image will be here
       </h1>
      </div>
      <div className="flex items-center justify-center h-full">
        <Toaster />
        <Card className="mx-4 shadow-xl grid w-[400px] lg:w-[500px] xl:mx-auto">
          <CardHeader className="grid text-center">
            <CardTitle className="font-bold text-3xl font-headingFont">
              Login
            </CardTitle>
            <CardDescription className="text-balance text-muted-foreground">
              Enter your details to Login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleLogin)}
                  className="space-y-8"
                >
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="lg:text-base">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter a valid Email"
                              {...field}
                              type="email"
                              className="lg:text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="lg:text-base">
                            Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter a password"
                              {...field}
                              type={passwordVisible ? '' : 'password'}
                              icon={
                                passwordVisible ? (
                                  <Eye onClick={toggleEye} />
                                ) : (
                                  <EyeOff onClick={toggleEye} />
                                )
                              }
                              className="lg:text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-headingFont lg:text-lg"
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="underline">
                Create an Account
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
