import { useState } from "react";
import Logo from "../../assets/imgs/IconeRbSoft.png";

import Button from "../ui/Button";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2f239cda] backdrop-blur-sm z-50 border-b w-full">
      <div className="container mx-auto px-8 sm:px-5 md:px-4 py-3 flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src={Logo} alt="AutoTech Logo" width={50} />
          <div className="flex items-center gap-1 ml-2">
            <h1 className="text-3xl font-extrabold text-white ">RB</h1>
            <h1 className="text-3xl font-extrabold text-white ">SOFT</h1>
          </div>
        </div>

        <NavDesktop />

        <Button
          size="icon"
          className="md:hidden "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoClose className="h-6 w-6 text-white hover:text-[#00ffc3] transition-colors" />
          ) : (
            <IoMenu className="h-6 w-6 text-white hover:text-[#00ffc3] transition-colors" />
          )}
        </Button>
      </div>

      <NavMobile
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
