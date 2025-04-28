import Link from "next/link";
import { UsersRound } from "lucide-react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Header() {
  return (
    <nav className="sticky top-0 w-full border-b backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-primary  tracking-wider"
            >
              ระบบเข้าชมรม
            </Link>
            <UsersRound className="w-6 h-6 text-primary ml-2" strokeWidth={2.5} />
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Header;