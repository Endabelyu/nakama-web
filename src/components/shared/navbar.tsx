import SearchInput from "./search-input";
import { LogIn, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full sticky top-0 z-50 '>
      <nav className='flex flex-col  justify-between items-center bg-strawHat pt-6 pb-4 px-8 shadow-lg'>
        <div className='flex justify-between items-center w-full'>
          <Link to={"/"}>
            <h1 className='text-2xl font-semibold text-listHat '>Nakama's</h1>
          </Link>

          <ul className='flex  items-center gap-4 text-listHat self-center'>
            
            <li className='flex items-center gap-2 cursor-pointer'>
              <Link
                to={"/"}
                className='hover:underline text-listHat hover:text-listHat'
              >
                Home
              </Link>
            </li>
            <li className='flex items-center gap-2 cursor-pointer '>
              <Link
                to={"/products"}
                className='hover:underline text-listHat hover:text-listHat'
              >
                Products
              </Link>
            </li>
          </ul>
          <SearchInput className='w-[45%]' />
          <span className='flex items-center gap-2'>
            <Link to={"/cart"}>
              <ShoppingCart className='h-6 w-6 text-listHat hover:fill-listHat ' />
            </Link>
            <span className='text-listHat'>|</span>
            <Button
              variant='outline'
              className='flex items-center  gap-2'
              onClick={() => navigate("/login")}
            >
              <LogIn className='h-4 w-4 ' />
              <p>Masuk</p>
            </Button>
          </span>
        </div>
        <div className='flex justify-center w-full mx-auto mt-0  '></div>
      </nav>
    </div>
  );
};

export default Navbar;
