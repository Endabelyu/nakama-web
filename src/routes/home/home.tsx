import HeroCarousel from "@/components/shared/hero-caroursel";
import ListProducts from "@/components/shared/list-products";
import { Separator } from "@/components/ui/separator";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { loader } from "./home-loader";
const HomeRoute = () => {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <div className='min-h-screen flex flex-col gap-4 px-6 pt-4 pb-8'>
      <HeroCarousel />
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className='font-bold text-4xl text-title-shadow text-listHat'>
          One Piece Premium Merch
        </h2>
        <p>
          Nakama's is a premium merchandise line from One Piece. Join Nakama's
          and showcase your passion for "One Piece" with our exclusive items!.
        </p>
      </div>
      <Separator className='w-[95%] self-center h-1 rounded my-12' />
      <section className='list-products flex flex-col gap-8'>
        <h3 className='font-bold text-4xl text-center  text-listHat '>
          Our Best Selling
        </h3>
        <ListProducts products={products} />
      </section>
      <ScrollRestoration />
    </div>
  );
};

export default HomeRoute;
