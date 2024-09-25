import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const TabDescription = ({ className }: { className: string }) => {
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
          <p>One Piece Necklaces – Straw Hat Pirates Members Metal Pendant</p>
          <p>Necklace Lenght; 70cm Material: Metal</p>
        </div>
      </TabsContent>
      <TabsContent value='additional-information'>
        <div>
          <p>SKU: 3256804829874475-09 Category: One Piece Necklaces</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabDescription;
