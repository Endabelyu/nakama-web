import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { convertToIDR } from "@/lib/currency";
import { cartLoader } from "./cart-loader";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { CartItem, CartResponse } from "@/types";
import { Trash2Icon } from "lucide-react";
import { cart, cartSuccess } from "@/lib/cart";
import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";

const CartRoute = () => {
  const cartData = useLoaderData() as Awaited<ReturnType<typeof cartLoader>>;

  const { data, totalItem, totalPrice } = cartData as CartResponse;

  async function handdleClick(id: string) {
    const deleteItems = await cart.deleteItemCart(id);

    if (deleteItems && !deleteItems.ok) {
      console.log("delete unsuccessfull");
    }

    return redirect("/cart");
  }

  // async function handleChangeQuantity(id: string, quantity: number) {
  //   // const updateItems = await cart.editQuantityItem(id, quantity);
  //   const token = auth.getToken();
  //   if (token) redirect("/login");
  //   const response = await fetch(`${BACKEND_API_URL}/carts/items/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({ quantity }),
  //     credentials: "include",
  //   });
  //   const deleteItem = (await response.json()) as cartSuccess;
  //   console.log(deleteItem, "test");

  //   if (!response.ok) return null;
  // }
  async function deleteItemCart() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbTF0ZXVob2MwMDA0c3kybHkxZXpkYjJtIiwiZXhwIjoxNzI4NTc5NzAxLCJpYXQiOjE3Mjg0OTMzMDF9.OrE_z3yVGj-BCzw0-UtKvxj0nyrsfS22Sidzmufoc4c";

    const addToCartData = {
      quantity: 1,
    };
    const response = await fetch(
      `https://nakama-api.endabelyu.store/carts/items/cm22oo9hy000fv29h1ey3yauf`,
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
                          <Form method='post' className='flex gap-4'>
                            <Button
                              variant={"outline"}
                              type='submit'
                              className=' bg-transparent shadow-none hover:bg-transparent   hover:border-transparent '
                              onClick={() => deleteItemCart()}
                            >
                              <Trash2Icon className='h-8 w-8 text-listHat hover:fill-listHat ' />
                            </Button>
                          </Form>

                          <Form method='patch' className='flex gap-4'>
                            <Input
                              type='number'
                              className=' w-20 h-8 text-center self-center  '
                              name='quantity'
                              defaultValue={item.quantity}
                              min={1}
                              max={item.product.stock}
                              onChange={
                                () =>
                                  // setTimeout(() => {
                                  deleteItemCart()
                                // }, 500);
                              }
                            />
                          </Form>
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
          <Button variant={"outline"} className='hover:bg-transparent'>
            Buy ({totalItem})
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CartRoute;
