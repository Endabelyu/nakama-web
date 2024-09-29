import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = ({ className }: { className?: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value, location, "e.target.value");
    if (!location.search.includes("?")) {
      navigate(`?q=${e.target.value}`);
    } else {
      if (location.search.includes("q")) {
        const params = new URLSearchParams(location.search);
        params.set("q", e.target.value);
        console.log(params, "params");
        navigate(`?${params.toString()}`);
      } else {
        navigate(`${location.search}&q=${e.target.value}`);
      }
    }
    setTimeout(() => {}, 300);
  }
  return (
    <div className={`relative ${className}`}>
      <Search className='absolute left-2 top-2.5 h-4 w-4 text-listHat ' />
      <Input
        placeholder='Search'
        className='pl-8 text-lg'
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
