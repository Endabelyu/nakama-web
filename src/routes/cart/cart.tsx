import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { convertToIDR } from "@/lib/currency";
import { cartLoader } from "./cart-loader";
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import { CartItem, CartResponse } from "@/types";
import { LoaderIcon, Trash2Icon } from "lucide-react";

const CartRoute = () => {
  const cartData = useLoaderData() as Awaited<ReturnType<typeof cartLoader>>;

  const { data, totalItem, totalPrice } = cartData as CartResponse;
  const navigation = useNavigation();
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='carts flex gap-10 w-full relative '>
        <div className='flex flex-col gap-8 carts-item bg-white rounded-md shadow-md w-3/4 p-4'>
          {data.items.length > 0 ? (
            <>
              <span className='flex items-center gap-6'>
                <Form method='post' className='' id='selectAllForm'>
                  <input type='hidden' name='action' value='selectAll' />
                  <input type='hidden' name='cartId' value={data.id} />
                  <input
                    type='hidden'
                    name='allItems'
                    value={JSON.stringify(data.items)}
                  />
                  <input
                    type='hidden'
                    id='selectAllCheckboxValue'
                    name='allSelected'
                    value={data.allSelected ? "true" : "false"}
                  />
                  <Checkbox
                    checked={data.allSelected}
                    onCheckedChange={(e) => {
                      const checkboxState = e === true ? "true" : "false";
                      const hiddenInput = document.getElementById(
                        "selectAllCheckboxValue",
                      ) as HTMLInputElement;
                      hiddenInput.value = checkboxState;
                      const formElement = document.getElementById(
                        `selectAllForm`,
                      ) as HTMLFormElement;
                      if (formElement) {
                        formElement.requestSubmit(); // Submit the form when checkbox changes
                      }
                    }}
                  />
                </Form>

                <p className='font-semibold'>Pilih Semua ({totalItem})</p>
              </span>
              <ul className=' flex flex-col gap-8'>
                {data.items &&
                  data.items.length > 0 &&
                  data.items.map((item: CartItem) => (
                    <li key={item.id} className='flex gap-8 items-center'>
                      <Form method='post' id={`selectAllForm-${item.id}`}>
                        <input type='hidden' name='action' value='selectItem' />
                        <input type='hidden' name='cartId' value={data.id} />
                        <input type='hidden' name='itemId' value={item.id} />
                        <input
                          type='hidden'
                          id={`selectItemCheckboxValue-${item.id}`}
                          name={`selectedItems-${item.id}`}
                          value={item.selected ? "true" : "false"}
                        />
                        <Checkbox
                          checked={item.selected}
                          onCheckedChange={(e) => {
                            const checkboxState = e === true ? "true" : "false";
                            const idSelect = `selectItemCheckboxValue-${item.id}`;
                            const hiddenInput = document.getElementById(
                              idSelect,
                            ) as HTMLInputElement;
                            hiddenInput.value = checkboxState;
                            const formElement = document.getElementById(
                              `selectAllForm-${item.id}`,
                            ) as HTMLFormElement;
                            if (formElement) {
                              formElement.requestSubmit(); // Submit the form when checkbox changes
                            }
                          }}
                        />
                      </Form>

                      <div className='w-full h-full flex justify-between self-start'>
                        <Link
                          to={`/products/${item.product.slug}`}
                          className='flex gap-8 items-center w-full'
                        >
                          <img
                            src={item.product.imageURL}
                            alt={item.product.name}
                            className='h-28 w-28'
                          />
                          <span className='self-start text-listHat'>
                            <p>{item.product.name}</p>
                          </span>
                        </Link>

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
        <div className='carts-total fixed  right-0  gap-4 flex flex-col justify-between bg-white rounded-md shadow-md p-4 w-1/4'>
          <h1 className='text-xl font-bold'>Total</h1>
          <p className='text-2xl text-listHat  font-bold'>
            {convertToIDR(Number(totalPrice))}
          </p>
          <Form method='post'>
            <input type='hidden' name='action' value='checkout' />
            <input type='hidden' name='totalPrice' value={totalPrice} />
            <input type='hidden' name='cartId' value={data.id} />
            <input
              type='hidden'
              name='dataCheckout'
              value={JSON.stringify(data.items)}
            />
            <Button
              variant={"outline"}
              className='hover:bg-transparent disabled:cursor-not-allowed'
              type='submit'
              disabled={totalItem === 0}
            >
              {navigation.state === "loading" ? (
                <LoaderIcon className='animate-spin h-5 w-5' />
              ) : (
                `Buy (${totalItem})`
              )}
            </Button>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default CartRoute;
