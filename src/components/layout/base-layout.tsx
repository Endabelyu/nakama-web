import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

const BaseLayout = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar />
      <main className='flex-[1]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;