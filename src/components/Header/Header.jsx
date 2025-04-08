import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/imgs/logoRbSoft.png";

import Button from "../ui/Button";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="AutoTech Logo" width={70} className="mx-10" />
        </div>

        <NavDesktop />

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
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
