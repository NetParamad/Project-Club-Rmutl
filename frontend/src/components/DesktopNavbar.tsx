"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { HomeIcon, School, BookText, Phone, LogIn, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

function DesktopNavbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">หน้าหลัก</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/clubs">
          <School className="w-4 h-4" />
          <span className="hidden lg:inline">ชมรม</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/about">
          <BookText className="w-4 h-4" />
          <span className="hidden lg:inline">เกี่ยวกับ</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/contact">
          <Phone className="w-4 h-4" />
          <span className="hidden lg:inline">ติดต่อ</span>
        </Link>
      </Button>
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/login">
          <LogIn className="w-4 h-4" />
          <span className="hidden lg:inline">เข้าสู่ระบบ</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mr-2"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
export default DesktopNavbar;
