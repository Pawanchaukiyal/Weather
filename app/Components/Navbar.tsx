"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/Icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";
import Image from "next/image";
import logo from "../../public/logo.png"; 
function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left flex items-center">
        <Image
          src={logo} 
          alt="Logo" 
          width={100}
          height={80}
        />
      </div>

      {/* Centering the SearchDialog and ThemeDropdown */}
      <div className="middle flex items-center gap-4">
        <SearchDialog />
       
      </div>

      {/* Right side with the Source Code button */}
      <div className="right flex items-center gap-2">
      <ThemeDropdown />
      <Button
          className="source-code-btn flex items-center gap-2 
            px-4 py-2 text-sm md:text-base lg:px-6 lg:py-3" // Responsive button sizes
          onClick={() => {
            router.push("https://github.com/Pawanchaukiyal");
          }}
        >
          {github} Source Code
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
