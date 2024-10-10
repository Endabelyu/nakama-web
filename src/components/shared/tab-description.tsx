import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
export type DescriptionTabTypes = {
  className: string;
  description: string;
  sku: string;
  category: string;
  stock: number;
};
const TabDescription = ({
  className,
  description,
  sku,
  category,
  stock,
}: DescriptionTabTypes) => {
  return (
    <Tabs defaultValue='description' className={` ${className} `}>
      <TabsList className='grid w-full grid-cols-2 border-b-2'>
        <TabsTrigger value='description'>Description</TabsTrigger>
        <TabsTrigger value='additional-information'>
          Additional Information
        </TabsTrigger>
      </TabsList>
      <TabsContent value='description'>
        <div>
          <p>{description}</p>
          <br />
          <p> stock: {stock}</p>
        </div>
      </TabsContent>
      <TabsContent value='additional-information'>
        <div>
          <p>
            SKU: {sku}
            <br />
            Category: {category}
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabDescription;
