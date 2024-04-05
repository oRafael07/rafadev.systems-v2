import { LucideIcon, User, Phone, FileText, Menu } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

interface MenuItems {
  icon: LucideIcon;
  label: string;
  redirect: Url;
}

const menuItems: MenuItems[] = [
  {
    icon: User,
    label: "About Me",
    redirect: "#",
  },
  {
    icon: Phone,
    label: "Contact",
    redirect: "#",
  },
  {
    icon: FileText,
    label: "Resume",
    redirect: "/resume",
  },
];

export function Header() {
  return (
    <div className="w-full py-10 px-8 md:py-10 md:px-36 flex justify-between items-center">
      <h1 className="text-white text-4xl font-bold">R</h1>
      <div className="hidden lg:flex items-center">
        <ul className="flex gap-12 items-center">
          {menuItems.map((i, key) => (
            <li key={key}>
              <Link
                href={i.redirect}
                className="text-white flex gap-2 font-light text-sm items-center"
              >
                <i.icon size="16" />
                {i.label}
              </Link>
            </li>
          ))}
          <div className="flex space-x-8 h-10 items-center">
            <Separator orientation="vertical" className="bg-zinc-500" />
            <Button variant="secondary">Call to action</Button>
          </div>
        </ul>
      </div>
      <Drawer>
        <DrawerTrigger className="flex lg:hidden cursor-pointer" asChild>
          <Menu size="30" className="text-white" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-gray-500">Menu</DrawerTitle>
          </DrawerHeader>
          <ul className="flex flex-col gap-12 items-center my-4 mb-8">
            {menuItems.map((i, key) => (
              <li key={key}>
                <Link
                  href={i.redirect}
                  className="flex gap-2 font-light text-sm items-center"
                >
                  <i.icon size="16" />
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
