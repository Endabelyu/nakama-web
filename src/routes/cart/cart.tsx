import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { convertToIDR } from "@/lib/currency";
import { cartLoader } from "./cart-loader";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { CartItem, CartResponse } from "@/types";
import { Trash2Icon } from "lucide-react";
import { cart } from "@/lib/cart";
import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";

const CartRoute = () => {
  const cartData = useLoaderData() as Awaited<ReturnType<typeof cartLoader>>;

  const { data, totalItem, totalPrice } = cartData as CartResponse;

  async function deleteItemCart() {
    const token = auth.getToken();

    const addToCartData = {
      quantity: 1,
    };
    const response = await fetch(
      `${BACKEND_API_URL}/carts/items/cm22vlx2n000lv29h1k8qcnh5`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(addToCartData),
      },
    );
    const deleteItem = await response.json();
    console.log(deleteItem);
    if (!response.ok) return null;
    return null;
  }
  deleteItemCart();
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='carts flex gap-10 w-full relative '>
        <div className='flex flex-col gap-8 carts-item bg-white rounded-md shadow-md w-3/4 p-4'>
          {data.items.length > 0 ? (
            <>
              <span className='flex items-center gap-6'>
                <Checkbox />
                <p className='font-semibold'>Pilih Semua (0)</p>
              </span>
              <ul className=' flex flex-col gap-8'>
                {data.items &&
                  data.items.length > 0 &&
                  data.items.map((item: CartItem) => (
                    <li key={item.id} className='flex gap-8 items-center'>
                      <Checkbox />
                      <img
                        src={item.product.imageURL}
                        alt={item.product.name}
                        className='h-28 w-28'
                      />
                      <div className='w-full h-full flex justify-between self-start'>
                        <span className='self-start'>
                          <p>{item.product.name}</p>
                        </span>
                        <span className='self-start flex flex-col gap-4'>
                          <p className='text-end text-listHat  font-bold'>
                            {convertToIDR(item.product.price)}
                          </p>
                          <div className='flex gap-4'>
                            <Form method='post' className=''>
                              <input
                                type='hidden'
                                name='action'
                                value='delete'
                              />
                              <input
                                type='hidden'
                                name='itemId'
                                value={item.id}
                              />{" "}
                              <Button
                                variant={"outline"}
                                type='submit'
                                className=' bg-transparent shadow-none hover:bg-transparent   hover:border-transparent '
                              >
                                <Trash2Icon className='h-8 w-8 text-listHat hover:fill-listHat ' />
                              </Button>
                            </Form>
                            <Form method='post' className=''>
                              <input
                                type='hidden'
                                name='action'
                                value='update'
                              />
                              <input
                                type='hidden'
                                name='itemId'
                                value={item.id}
                              />{" "}
                              <Input
                                type='number'
                                className=' w-20 h-8 text-center self-center  '
                                name='quantity'
                                defaultValue={item.quantity}
                                min={1}
                                max={item.product.stock}
                                onChange={(e) => {
                                  // Automatically submit the form on change
                                  e.target.form!.requestSubmit();
                                }}
                              />
                              <input
                                type='hidden'
                                name='method'
                                value='PATCH'
                              />
                              <Button type='submit' className='hidden'>
                                Update
                              </Button>
                            </Form>
                          </div>
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <p className='mx-auto text-xl font-semibold'>No items in cart</p>
          )}
        </div>
        <div className='carts-total fixed  right-0  h-[23vh] flex flex-col justify-between bg-white rounded-md shadow-md p-4 w-1/4'>
          <h1 className='text-xl font-bold'>Total</h1>
          <p className='text-2xl text-listHat  font-bold'>
            {convertToIDR(Number(totalPrice))}
          </p>
          <form method='post'>
            <input type='hidden' name='action' value='checkout' />
            <input type='hidden' name='dataChekcout' value={[]} />
            <Button
              variant={"outline"}
              className='hover:bg-transparent'
              type='submit'
            >
              Buy ({totalItem})
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CartRoute;
