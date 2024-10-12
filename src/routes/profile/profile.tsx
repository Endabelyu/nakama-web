import { Separator } from "@/components/ui/separator";
import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profileLoader } from "./profile-loader";
import { getAvatarURL } from "@/lib/avatar";
const ProfileRoute = () => {
  const { user } = useLoaderData() as Awaited<ReturnType<typeof profileLoader>>;

  return (
    <div className='min-h-screen flex flex-col  px-6 pt-8 pb-8 w-2/4 mx-auto'>
      <img
        src={getAvatarURL(user!.name)}
        alt={user!.id}
        className='size-28 rounded-full self-center'
      />
      <Separator className=' self-center h-1 rounded my-6' />

      <section className='userProfile'>
        <span className='flex gap-4 text-listHat text-lg'>
          <p>Name :</p>
          <p className=''>{user!.name}</p>
        </span>
        <span className='flex gap-4 text-listHat text-lg'>
          <p>Email :</p>
          <p className='text-listHat'>{user!.email || `No email`}</p>
        </span>
        <span className='flex gap-4 text-listHat text-lg'>
          <p>Phone :</p>
          <p className='text-listHat'>{user!.phone || `No phone number`}</p>
        </span>
      </section>
      <section className='flex justify-between mt-8'>
        <Link
          to={"/order"}
          className='bg-strawHat hover:bg- text-listHat  rounded-md py-2 px-4 text-center hover:text-listHat hover:scale-105'
        >
          <p>Go to order page</p>
        </Link>
        <Form method='post'>
          <Button
            variant='outline'
            className='flex items-center  gap-2'
            type='submit'
          >
            <p>Logout</p>
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default ProfileRoute;
