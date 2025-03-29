import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

interface linkInterface {
  title: string;
  link: string;
}
const Navbar = () => {
  const [links] = useState<linkInterface[]>([
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Login",
      link: "/login",
    },
  ]);
  return (
    <>
      <div className="bg-primary-color items-center  py-3.5 px-5 flex justify-between">
        <h1 className="text-accent-color text-2xl font-extrabold">HireMeNow</h1>
        <div className="flex ">
          {links?.map((elem: linkInterface, index: number) => {
            return (
              <NavLink
                key={index}
                to={elem?.link}
                className={({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-accent-color underline p-1 rounded  list-none mx-2 font-semibold"
                    : "text-accent-color p-1 rounded  list-none mx-2 font-light"
                }
              >
                {elem.title}
              </NavLink>
            );
          })}
        </div>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
