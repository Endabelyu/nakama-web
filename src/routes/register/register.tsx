import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoaderIcon } from "lucide-react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { ActionData } from "../login/login-action";

const RegisterRoute = () => {
  const navigation = useNavigation();
  const actionData = useActionData() as ActionData;
  return (
    <main className='px-8 flex justify-center items-center min-h-screen gap-4'>
      <Card className='flex flex-col justify-between w-5/12 my-8   p-8 shadow-none bg-white hover:shadow-none hover:border-none'>
        <h2 className='text-2xl  text-center font-bold '>Register Now</h2>
        <p className='text-center text-slate-600 mt-2 mb-8'>
          Already have an account?{" "}
          <Link
            to={"/login"}
            className='text-listHat hover:text-listHat  hover:font-semibold'
          >
            Login
          </Link>{" "}
        </p>
        <Form method='post' className=' flex flex-col gap-4 justify-between'>
          <span>
            <Input type='text' name='email' placeholder='Email' />{" "}
            {actionData?.errors?.email && (
              <p className='text-red-500 my-0'>{actionData.errors.email}</p>
            )}
          </span>
          <span>
            <Input type='text' name='name' placeholder='Name' />
            {actionData?.errors?.name && (
              <p className='text-red-500 my-0'>{actionData.errors.name}</p>
            )}
          </span>
          <span>
            <Input type='password' name='password' placeholder='Password' />
            {actionData?.errors?.password && (
              <p className='text-red-500 my-0'>{actionData.errors.password}</p>
            )}
          </span>
          <span>
            <Input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
            />
            {actionData?.errors?.confirmPassword && (
              <p className='text-red-500 my-0'>
                {actionData.errors.confirmPassword}
              </p>
            )}
          </span>
          <span>
            <Input type='text' name='address' placeholder='Address' />
            {actionData?.errors?.address && (
              <p className='text-red-500 my-0'>{actionData.errors.address}</p>
            )}
          </span>
          <span>
            <Input type='text' name='phone' placeholder='Phone Number' />
            {actionData?.errors?.phone && (
              <p className='text-red-500 my-0'>{actionData.errors.phone}</p>
            )}
          </span>
          <Button
            variant={"outline"}
            type='submit'
            className='w-full h-12 bg-listHat text-slate-50 hover:bg-transparent  hover:border-listHat'
          >
            {navigation.state === "loading" ? (
              <LoaderIcon className='animate-spin h-5 w-5' />
            ) : (
              "Register"
            )}
          </Button>
        </Form>
      </Card>
    </main>
  );
};

export default RegisterRoute;
