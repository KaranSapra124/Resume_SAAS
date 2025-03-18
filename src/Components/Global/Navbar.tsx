import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

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
  ]);
  return (
    <>
      <div className="bg-primary-color items-center  py-2.5 px-1 flex justify-between">
        <h1 className="text-accent-color text-2xl font-extrabold">HireMeNow</h1>
        <div className="flex ">
          {links?.map((elem: linkInterface, index: number) => {
            return (
              <NavLink key={index}
                to={elem?.link}
                className="text-primary-color p-1 rounded bg-accent-color list-none mx-2 font-semibold"
              >
                {elem.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
