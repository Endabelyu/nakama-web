import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { convertToIDR } from "@/lib/currency";
import { Link, useLoaderData } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { OrderLoader } from "./order-detail-loader";
import { Order } from "@/types/order";
import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
const OrderDetailRoute = () => {
  const { orders } = useLoaderData() as Awaited<ReturnType<typeof OrderLoader>>;
  const filteredOrders = orders.filter((item: Order) => item.items.length > 0);
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='carts flex flex-col gap-6 w-full relative  '>
        {filteredOrders.length > 0 ? (
          <>
            <ul className='flex flex-col gap-8 items-center'>
              {filteredOrders.map((order: Order) => (
                <li
                  key={order.id}
                  className=' flex flex-col gap-8 bg-white rounded-md shadow-md w-3/4 p-4'
                >
                  <ul className=' flex flex-col gap-8'>
                    <Link to={`/order/${order.id}`}>
                      <li
                        key={order.items[0].id}
                        className='flex flex-col gap-8 items-center'
                      >
                        <div className='w-full h-full flex gap-8 self-start justify-between'>
                          <span className='flex gap-8'>
                            <img
                              src={order.items[0].product.imageURL}
                              alt={order.items[0].product.name}
                              className='h-24 w-24'
                            />
                            <span className='self-start font-bold text-listHat flex flex-col'>
                              <p>{order.items[0].product.name}</p>
                              <p className='text-slate-600 font-medium'>
                                {order.items.length} barang
                              </p>
                            </span>
                          </span>

                          <span className=' self-start flex flex-col gap-4'>
                            <p className='text-end text-slate-900  font-bold flex gap-4'>
                              <ShoppingBag className='h-8 w-8 self-center' />
                              <span className='text-sm'>
                                <p>Purchased</p>
                                <p>
                                  {dayjs(order.createdAt).format(
                                    "DD MMMM YYYY",
                                  )}
                                </p>
                              </span>
                            </p>

                            <Badge
                              variant={"destructive"}
                              className='cursor-default bg-green-700 text-center w-1/2 hover:bg-green-700 self-end'
                            >
                              {order.status === "COMPLETED"
                                ? "Completed"
                                : "Pending"}
                            </Badge>
                          </span>
                        </div>
                        <div className='self-start'>
                          <p className='text-slate-600 font-medium'>Total</p>
                          <p className=' text-listHat  font-bold'>
                            {convertToIDR(Number(order.totalPrice))}
                          </p>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </li>
              ))}
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
