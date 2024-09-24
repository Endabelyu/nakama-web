import { Copyright } from "lucide-react";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='w-full flex flex-col gap-4 bottom-0  bg-strawHat text-listHat py-4 px-8 border-t-2 border-strawHat '>
      <section className='grid grid-cols-1 md:grid-cols-4  items-center gap-10 text-listHat '>
        <div className=' flex h-full  flex-col gap-2'>
          <h2 className='text-2xl  font-semibold'>Nakama's</h2>
          <p className='opacity-75 text-sm'>
            Offer a unique selection of high-quality "One Piece" merchandise.
            Join Nakama's and showcase your passion for "One Piece" with our
            exclusive items!
          </p>
        </div>
        <div className='flex h-full flex-col gap-2'>
          <h2 className='text-2xl  font-semibold'>Our Company</h2>
          <ul className=''>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex h-full flex-col gap-2'>
          <h2 className='text-2xl  font-semibold'>Support</h2>
          <ul>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Shipping & Delivery Policies
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Payment Terms
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Return & Refund Policies
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Customer Help (FAQ)
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Whole Sale
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex h-full flex-col gap-2'>
          <h2 className='text-2xl  font-semibold'>CONTACT US </h2>
          <ul>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className='opacity-70 hover:opacity-100 text-listHat hover:text-listHat'
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Separator />
      <div className='flex justify-center items-center gap-4 p-3'>
        <span className='flex items-center gap-2'>
          <Copyright className='h-4 w-4 text-listHat' />
          <p>2024 Nakama's. All Rights Reserved.</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
