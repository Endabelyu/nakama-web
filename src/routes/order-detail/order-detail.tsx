import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { convertToIDR } from "@/lib/currency";
import { useLoaderData } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { OrderItem } from "@/types/order";
import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-separator";
import { OrderDetailLoader } from "../order-detail/order-detail-loader";
const OrderDetailRoute = () => {
  const { orders } = useLoaderData() as Awaited<
    ReturnType<typeof OrderDetailLoader>
  >;
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='carts flex flex-col gap-6 w-full relative  '>
        {orders ? (
          <>
            <ul className='flex flex-col gap-8 items-center'>
              <li className=' flex flex-col gap-8 bg-white rounded-md shadow-md w-3/4 p-4'>
                <ul className=' flex flex-col gap-8'>
                  <li className='flex flex-col gap-8 items-center'>
                    <div className=' self-start flex justify-between gap-4 w-full'>
                      <span className='text-end text-slate-900  font-bold flex gap-4'>
                        <ShoppingBag className='h-8 w-8 self-center' />
                        <span className='text-sm'>
                          <p>Purchased</p>
                          <p>
                            {dayjs(orders.createdAt).format("DD MMMM YYYY")}
                          </p>
                        </span>
                      </span>
                      <Badge
                        variant={"destructive"}
                        className='cursor-default bg-green-700 text-center w-[10%] hover:bg-green-700 self-center'
                      >
                        {orders.status === "COMPLETED"
                          ? "Completed"
                          : "Pending"}
                      </Badge>
                    </div>
                    <Separator className='w-full self-center h-1  bg-red-800 rounded ' />
                    {orders.items &&
                      orders.items.length > 0 &&
                      orders.items.map((item: OrderItem) => (
                        <div className='w-full h-full flex gap-8 self-start justify-between'>
                          <span className='flex gap-8'>
                            <img
                              src={item.product.imageURL}
                              alt={item.product.name}
                              className='h-24 w-24'
                            />
                            <span className='self-start font-bold text-listHat flex flex-col'>
                              <p>{item.product.name}</p>
                              <span className='text-slate-600 font-medium flex gap-2'>
                                <p>{item.quantity} x</p>
                                <p>{convertToIDR(item.product.price)}</p>
                              </span>
                            </span>
                          </span>
                        </div>
                      ))}

                    <div className='self-start'>
                      <p className='text-slate-600 font-medium'>Total</p>
                      <p className=' text-listHat  font-bold'>
                        {convertToIDR(Number(orders.totalPrice))}
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ) : (
          <p className='mx-auto text-xl font-semibold'>No items for orders</p>
        )}
        {/* <div className='carts-total fixed  right-0  flex flex-col gap-4 justify-between bg-white rounded-md shadow-md p-4 w-1/4'>
          {/* <Form method='post'>
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
          </Form> */}
        {/* </div> */}
      </section>
    </main>
  );
};

export default OrderDetailRoute;
