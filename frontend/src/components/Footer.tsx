import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-bold">ระบบชมรมนักศึกษา</h3>
            <p className="text-sm text-muted-foreground">
              พัฒนาตัวเองและสร้างประสบการณ์ใหม่ๆ ร่วมกับเพื่อนนักศึกษา
            </p>
          </div>

          {/* Main Menu */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-bold">เมนูหลัก</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ชมรมทั้งหมด
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-bold">ติดต่อ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 ถนนมหาวิทยาลัย</li>
              <li>เขตเมือง จังหวัดกรุงเทพ 10xxx</li>
              <li>โทร: 02-xxx-xxxx</li>
              <li>อีเมล: contact@university.ac.th</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-bold">ติดตามเรา</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>© 2024 ระบบชมรมนักศึกษา. สงวนลิขสิทธิ์</p>
        </div>
      </div>
    </footer>
  );
}
