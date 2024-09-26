import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import ListProducts from "@/components/shared/list-products";
import { loader } from "./products-loader";
import { useLoaderData } from "react-router-dom";
import SearchInput from "@/components/shared/search-input";
import PaginationList from "@/components/shared/pagination-list";

const ProductsRoute = () => {
  const { products, message, ok, pagination } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  return (
    <main className=' px-8 mt-6 mb-12 flex flex-col gap-4'>
      <Breadcrumbs />
      <section className='list-products relative flex flex-col gap-8 w-full'>
        <div className='filters w-[95%] fixed flex justify-between rounded-md bg-scroll-[#F0F3F7] p-4 '>
          <SearchInput className='w-[25%]' />
          {/* <SelectComponent /> */}
          <select
            name=''
            id=''
            value=''
            className='w-2/12 rounded-md border border-listHat p-2 text-listHat focus-visible:outline-none bg-transparent'
          >
            <option value=''>Select Order</option>
            <option value='a'>a</option>
            <option value='b'>b</option>
            <option value='c'>c</option>
          </select>
          <span className='flex items-center text-listHat w-6/12 justify-between'>
            <p>
              Showing 1-{products.length} of {pagination.total} Products
            </p>
            <PaginationList
              total={pagination.total}
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
            />
          </span>
        </div>
        <div className='mt-24'>
          <ListProducts products={products} type='products' />
        </div>
      </section>
    </main>
  );
};

export default ProductsRoute;
