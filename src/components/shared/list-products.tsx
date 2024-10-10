import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import { convertToIDR } from "@/lib/currency";
import { ProductData } from "@/types";

export function ListProducts({
  products,
  type,
}: {
  products: ProductData[];
  type?: string;
}) {
  return (
    <ul
      className={`grid  ${
        type === "products" ? "grid-cols-4" : "grid-cols-3"
      } gap-4 list-products`}
    >
      {products && products.length > 0 ? (
        products.map(({ id, slug, imageURL, name, price }) => (
          <li key={id}>
            <Link to={`/products/${slug}`}>
              <Card className={`${type === "products" ? "h-[65vh]" : ""}`}>
                <CardHeader
                  className={`${type === "products" ? "" : "h-[70vh]"}`}
                >
                  <img
                    src={imageURL}
                    alt={name}
                    className={`${
                      type === "products" ? "w-56 h-56" : "w-full"
                    }  rounded-lg  object-contain bg-stone-200`}
                  />
                </CardHeader>

                <CardContent className='py-2 h-[15vh]'>
                  <h4
                    className={`${
                      type === "products" ? "text-sm" : "text-lg"
                    }' font-bold`}
                  >
                    {name}
                  </h4>
                  <p className={`text-listHat `}>{convertToIDR(price)}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))
      ) : (
        <li className={`${type === "products" ? "col-span-4" : "col-span-3"}`}>
          <div className='text-center mx-auto p-4 '>
            <p className='text-center text-4xl font-bold'>
              No products available.
            </p>
          </div>
        </li>
      )}
    </ul>
  );
}

export default ListProducts;
