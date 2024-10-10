import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoaderIcon } from "lucide-react";
import { Form, Link, useNavigation } from "react-router-dom";

const RegisterRoute = () => {
  const navigation = useNavigation();
  return (
    <main className='px-8 flex justify-center items-center min-h-screen gap-4'>
      <Card className='flex flex-col justify-between w-5/12   p-8 shadow-none bg-white hover:shadow-none hover:border-none'>
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
          <Input type='text' name='email' placeholder='Email' required />{" "}
          <Input type='text' name='name' placeholder='Name' required />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            required
          />
          <Input type='text' name='address' placeholder='Address' />
          <Input type='text' name='phone' placeholder='Phone Number' required />
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
