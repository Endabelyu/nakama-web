import { Outlet, ScrollRestoration, useLoaderData } from "react-router-dom";
import Navbar from "../../components/shared/navbar";
import Footer from "../../components/shared/footer";
import { RootLoader } from "./root-loader";
import { CookiesProvider } from "react-cookie";

const BaseLayout = () => {
  const { user } = useLoaderData() as Awaited<ReturnType<typeof RootLoader>>;
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <div className='flex flex-col min-h-screen '>
        <Navbar user={user} />
        <main className='flex-[1]'>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </CookiesProvider>
  );
};

export default BaseLayout;
