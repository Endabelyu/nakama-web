import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import listProducts from "@/data/listProductData";
import { convertToIDR } from "@/lib/currency";

export function ListProducts() {
  return (
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3    gap-6'>
      {listProducts.map(({ id, slug, imageURL, name, price }) => (
        <li key={id}>
          <Link to={`/products/${slug}`}>
            <Card>
              <CardHeader>
                <img
                  src={imageURL}
                  alt={name}
                  width={200}
                  height={200}
                  className='rounded-lg w-full object-contain bg-stone-200'
                />
              </CardHeader>

              <CardContent className='py-2'>
                <h4 className='text-lg font-bold'>{name}</h4>
                <p className='text-listHat'>{convertToIDR(price)}</p>
              </CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListProducts;
