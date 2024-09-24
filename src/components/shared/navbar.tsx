import SearchInput from "./searchInput";
import { LogIn, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='w-full sticky top-0 z-50 '>
      <nav className='flex flex-col gap-3 justify-between items-center bg-strawHat pt-6 pb-4 px-8 shadow-lg'>
        <div className='flex justify-between items-center w-full'>
          <Link to={"/"}>
            <h1 className='text-2xl font-semibold text-listHat '>Nakama's</h1>
          </Link>

          <SearchInput />
          <span className='flex items-center gap-2'>
            <Link to={"/"}>
              <ShoppingCart className='h-6 w-6 text-listHat hover:fill-listHat ' />
            </Link>
            <span className='text-listHat'>|</span>
            <Button
              variant='outline'
              className='flex items-center bg-listHat text-slate-50 gap-2'
            >
              <LogIn className='h-4 w-4 ' />
              <p>Masuk</p>
            </Button>
          </span>
        </div>
        <div className='flex justify-center w-full mx-auto mt-0  '>
          <ul className='flex  items-center gap-4 text-listHat w-[65%] '>
            <li className='flex items-center gap-2 cursor-pointer'>
              <p className='hover:underline'>Home</p>
            </li>
            <li className='flex items-center gap-2 cursor-pointer'>
              <p className='hover:underline'>Store</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
