import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import TabDescription from "@/components/shared/tab-description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { convertToIDR } from "@/lib/currency";
import { Form, useLoaderData } from "react-router-dom";
import { ProductLoader } from "./product-detail-loader";

const ProductDetailRoute = () => {
  const { products } = useLoaderData() as Awaited<
    ReturnType<typeof ProductLoader>
  >;

  if (!products) {
    return <p>Product not found.</p>;
  }
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='product flex gap-8'>
        <img src={products.imageURL} alt={products.name} className='w-1/2' />
        <div className='product-title w-1/2'>
          <h2 className='text-3xl font-bold text-listHat mb-6'>
            {products.name}
          </h2>
          <p className='text-2xl'>{convertToIDR(products.price)}</p>
          <TabDescription
            className='mt-4 mb-16 h-[30vh] w-full'
            description={products.description}
            sku={products.sku}
            category={products.category}
            stock={products.stock}
          />
          <div className='flex gap-2'>
            <Form method='post' className=' w-full'>
              <input
                type='hidden'
                name='productId'
                defaultValue={products.id}
              />
              <span className='flex gap-4 '>
                <Input
                  type='number'
                  className='text-2xl w-20 h-16 text-center '
                  name='quantity'
                  defaultValue={1}
                  min={1}
                  max={products.stock}
                />
                <Button
                  variant='outline'
                  type='submit'
                  className='w-full h-16 hover:bg-transparent'
                >
                  <span>Add to Cart</span>
                </Button>
              </span>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailRoute;
