import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { convertToIDR } from "@/lib/currency";

const CartRoute = () => {
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='carts flex gap-10 w-full relative '>
        <div className='flex flex-col gap-8 carts-item bg-white rounded-md shadow-md w-3/4 p-4'>
          <span className='flex items-center gap-6'>
            <Checkbox />
            <p className='font-semibold'>Pilih Semua (0)</p>{" "}
          </span>
          <ul className=' flex flex-col gap-8'>
            <li className='flex gap-8 items-center'>
              <Checkbox />
              <img
                src='/image/nakamas.jpg'
                alt='nakamas'
                className='h-28 w-28'
              />
              <div className='w-full h-full flex justify-between self-start'>
                <span className='self-start'>
                  <p>
                    One Piece Necklaces – Straw Hat Pirates Members Metal
                    Pendant Necklace
                  </p>
                </span>
                <span className='self-start flex flex-col gap-4'>
                  <p className='text-end text-listHat  font-bold'>
                    {convertToIDR(100000)}
                  </p>
                  <Input
                    type='number'
                    placeholder='0'
                    className='w-20 text-center'
                  />
                </span>
              </div>
            </li>
            <li className='flex gap-8 items-center'>
              <Checkbox />
              <img
                src='/image/nakamas.jpg'
                alt='nakamas'
                className='h-28 w-28'
              />
              <div className='w-full h-full flex justify-between self-start'>
                <span className='self-start'>
                  <p>
                    One Piece Necklaces – Straw Hat Pirates Members Metal
                    Pendant Necklace
                  </p>
                </span>
                <span className='self-start flex flex-col gap-4'>
                  <p className='text-end text-listHat  font-bold'>
                    {convertToIDR(100000)}
                  </p>
                  <Input
                    type='number'
                    placeholder='0'
                    className='w-20 text-center'
                  />
                </span>
              </div>
            </li>
            <li className='flex gap-8 items-center'>
              <Checkbox />
              <img
                src='/image/nakamas.jpg'
                alt='nakamas'
                className='h-28 w-28'
              />
              <div className='w-full h-full flex justify-between self-start'>
                <span className='self-start'>
                  <p>
                    One Piece Necklaces – Straw Hat Pirates Members Metal
                    Pendant Necklace
                  </p>
                </span>
                <span className='self-start flex flex-col gap-4'>
                  <p className='text-end text-listHat  font-bold'>
                    {convertToIDR(100000)}
                  </p>
                  <Input
                    type='number'
                    placeholder='0'
                    className='w-20 text-center'
                  />
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className=' fixed right-0 carts-total h-[35vh] flex flex-col justify-between bg-white rounded-md shadow-md p-4 w-1/4'>
          <span className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Total</h1>
            <p className='text-2xl text-listHat  font-bold'>
              {convertToIDR(100000)}
            </p>
          </span>

          <Button variant={"outline"} className='hover:bg-transparent'>
            Buy (1)
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CartRoute;
