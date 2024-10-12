import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoaderIcon } from "lucide-react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { ActionData } from "./login-action";

const LoginRoute = () => {
  const navigation = useNavigation();
  // No type argument for useActionData
  const actionData = useActionData() as ActionData;
  console.log(actionData, "actionData");
  // Safely cast the actionData to the expected structure if needed
  return (
    <main className='px-8 flex justify-center items-center min-h-screen  gap-4'>
      <Card className='flex flex-col justify-between w-5/12  p-8 shadow-none bg-white hover:shadow-none hover:border-none -mt-20'>
        <span className='flex justify-between'>
          <h2 className='text-2xl text-center font-bold mb-8'>
            Login to Nakama's
          </h2>
          <Link
            to={"/register"}
            className='text-listHat hover:text-listHat  hover:font-semibold'
          >
            Register
          </Link>{" "}
        </span>
        <Form method='post' className=' flex flex-col gap-3 justify-between'>
          <span>
            <label htmlFor='email' className='mb-0 text-sm font-medium'>
              Email
            </label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email'
            />
            {actionData?.errors?.email && (
              <p style={{ color: "red" }}>{actionData.errors.email}</p>
            )}
          </span>
          <span>
            <label htmlFor='password' className='mb-0 text-sm font-medium'>
              Password
            </label>
            <Input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
            />
            {actionData?.errors?.password && (
              <p style={{ color: "red" }}>{actionData.errors.password}</p>
            )}
          </span>

          <Button
            variant={"outline"}
            className='w-full h-12 bg-listHat text-slate-50  hover:bg-transparent mt-4'
            type='submit'
          >
            {navigation.state === "loading" ? (
              <LoaderIcon className='animate-spin h-5 w-5' />
            ) : (
              "Login"
            )}
          </Button>
        </Form>
      </Card>
    </main>
  );
};

export default LoginRoute;
