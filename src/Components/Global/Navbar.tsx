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
  return <div>Navbar</div>;
};

export default Navbar;
