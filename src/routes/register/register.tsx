import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const RegisterRoute = () => {
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
        <form
          action=''
          method='post'
          className=' flex flex-col gap-4 justify-between'
        >
          <Input type='text' placeholder='Username' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Confirm Password' />
          <Input type='text' placeholder='Address' />
          <Input type='text' placeholder='Phone Number' />
          <Button
            variant={"outline"}
            className='w-full h-12 bg-listHat text-slate-50 hover:bg-transparent  hover:border-listHat'
          >
            Register
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default RegisterRoute;
