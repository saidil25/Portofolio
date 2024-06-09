"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "project",
    path: "/project",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <div className="flex gap-8">
      {links.map((link, index) => (
        <Link href={link.path} key={index} className={`${link.path === pathname && " text-accent border-b-2 border-accent"}
        capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
