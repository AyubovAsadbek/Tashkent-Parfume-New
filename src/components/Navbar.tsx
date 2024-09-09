"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Catalog from "./Catalog";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  // Language Switcher
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  // Catalog Handler
  function handleCatalog() {
    setOpen(!open);
  }

  return (
    <header>
      <MobileNav handleCatalog={handleCatalog} open={open} />
      <DesktopNav handleCatalog={handleCatalog} open={open} />
      <Catalog open={open} />
    </header>
  );
};

export default Navbar;
