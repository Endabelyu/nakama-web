import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { Button } from "@/components/ui/button";
import { convertToIDR } from "@/lib/currency";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { CartItem, User } from "@/types";
import { LoaderIcon } from "lucide-react";
import { checkoutLoader } from "./checkout-loader";

const CheckoutRoute = () => {
  const cartData = useLoaderData() as Awaited<
    ReturnType<typeof checkoutLoader>
  >;

  const { user, selectedItems, totalPrice } = cartData as {
    user: User;
    selectedItems: CartItem[];
    totalPrice: number;
  };
  const navigation = useNavigation();
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='carts flex flex-col gap-6 w-full relative '>
        <div className='address  bg-white rounded-md shadow-md w-3/4 p-4'>
          <h2 className='font-bold text-slate-500'>Address</h2>
          <p className=' '>{user.address || "No Address"}</p>
          {/* <p className=' mt-4'>
            {"deket masjid baiturrahman, Pasarkemis, Kab. Tangerang, Banten"}
          </p> */}
        </div>{" "}
        <div className='flex flex-col gap-8 carts-item bg-white rounded-md shadow-md w-3/4 p-4'>
          {selectedItems.length > 0 ? (
            <>
              <ul className=' flex flex-col gap-8'>
                {selectedItems &&
                  selectedItems.length > 0 &&
                  selectedItems.map((item: CartItem) => (
                    <li key={item.id} className='flex gap-8 items-center'>
                      <div className='w-full h-full flex gap-8 self-start'>
                        <img
                          src={item.product.imageURL}
                          alt={item.product.name}
                          className='h-28 w-28'
                        />
                        <span className='self-start text-listHat flex flex-col'>
                          <p>{item.product.name}</p>
                          <p>
                            {item.quantity} x {convertToIDR(item.product.price)}
                          </p>
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <p className='mx-auto text-xl font-semibold'>
              No items for checkout
            </p>
          )}
        </div>
        <div className='carts-total fixed  right-0  flex flex-col gap-4 justify-between bg-white rounded-md shadow-md p-4 w-1/4'>
          <h1 className='text-xl font-bold'>Total</h1>
          <p className='text-2xl text-listHat  font-bold'>
            {convertToIDR(Number(totalPrice))}
          </p>
          <Form method='post'>
            <input type='hidden' name='action' value='checkout' />

            <Button
              variant={"outline"}
              className='hover:bg-transparent disabled:cursor-not-allowed'
              type='submit'
            >
              {navigation.state === "loading" ? (
                <LoaderIcon className='animate-spin h-5 w-5' />
              ) : (
                `Payment`
              )}
            </Button>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default CheckoutRoute;
