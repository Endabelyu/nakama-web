import Breadcrumbs from "@/components/shared/breadcrumbs";
import TabDescription from "@/components/shared/tabDescription";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { convertToIDR } from "@/lib/currency";

const ProductDetailRoute = () => {
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='product flex gap-8'>
        <img
          src='/image/one-piece-poster.jpg'
          alt='one piece'
          className='w-1/2'
        />
        <div className='product-title'>
          <h2 className='text-3xl font-bold text-listHat mb-6'>
            One Piece Necklaces – Straw Hat Pirates Members Metal Pendant
            Necklace
          </h2>
          <p className='text-2xl'>{convertToIDR(100000)}</p>
          <TabDescription className='mt-4 mb-16' />
          <div className='flex gap-2'>
            <span className='flex gap-4'>
              <Input
                type='number'
                placeholder='1'
                className='text-2xl w-20 h-16 '
                min={1}
              />
            </span>
            <Button
              variant='outline'
              className='w-3/4 h-16 hover:bg-transparent'
            >
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailRoute;
