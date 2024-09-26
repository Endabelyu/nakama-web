import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchInput = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <Search className='absolute left-2 top-2.5 h-4 w-4 text-listHat ' />
      <Input placeholder='Search' className='pl-8 text-lg' />
    </div>
  );
};

export default SearchInput;
