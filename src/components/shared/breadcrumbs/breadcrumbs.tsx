import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { useBreadcrumbs } from "./breadcrumbs-logic";

const Breadcrumbs = () => {
  const breadcrumbItems = useBreadcrumbs();
  console.log(breadcrumbItems, "item");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <>
            <BreadcrumbItem key={item.path}>
              <BreadcrumbLink href={item.path} className='cursor-pointer'>
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
