import { useState } from "react";
import Logo from "../../assets/imgs/IconeRbSoft.png";
import Button from "../ui/Button";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#2f239c] bg-opacity-95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="RB Soft Logo"
            width={48}
            height={48}
            className="mr-2"
          />
          <div className="flex items-center gap-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              RB
            </h1>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              SOFT
            </h1>
          </div>
        </div>

        <NavDesktop />

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden text-white hover:text-[#00ffc3] hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <IoMenu className="h-6 w-6" />
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
