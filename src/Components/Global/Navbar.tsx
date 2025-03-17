import { useState } from "react";

interface linkInterface {
  title: string;
  link: string;
}
const Navbar = () => {
  const [links, setLinks] = useState<linkInterface[]>([
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
    <div className="bg-primary-color py-2 px-1 flex justify-between">
        <h1 className="text-accent-color">HireMeNow</h1>
      <div className="flex ">
        {links?.map((elem: linkInterface, index: number) => {
          return (
            <li className="text-accent-color list-none mx-2 font-semibold" key={index}>
              {elem?.title}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
