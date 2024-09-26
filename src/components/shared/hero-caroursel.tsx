import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import imageNakamas from "@/data/hero-carousel-data";

const HeroCarousel = () => {
  return (
    <div className=''>
      <Carousel className='mx-auto p-4 '>
        <CarouselContent className='h-[28rem] '>
          {imageNakamas.map(({ id, src, alt, position }) => (
            <CarouselItem key={id} className='rounded-md'>
              <img
                src={`${src}`}
                alt={alt}
                className={`h-full w-full object-cover object-[${position}] rounded-md `}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
