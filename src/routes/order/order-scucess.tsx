import { Link } from "react-router-dom";
import { Check } from "lucide-react";
const OrderSuccessRoute = () => {
  return (
    <div className=' flex flex-col my-4 px-6 pt-8 pb-8 w-2/4 mx-auto bg-white justify-center gap-8 items-center'>
      <div className='w-24 h-24  flex border border-slate-300 rounded-full'>
        <Check className='h-12 w-12 text-green-500 mx-auto self-center' />
      </div>

      <p className=''>Thank you for being Nakama's</p>
      <Link
        to={"/products"}
        className='bg-strawHat hover:bg- text-listHat  rounded-md py-2 px-4 text-center hover:text-listHat hover:scale-105'
      >
        <p>Go to product page</p>
      </Link>
    </div>
  );
};

export default OrderSuccessRoute;
