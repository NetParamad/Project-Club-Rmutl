import Image from "next/image";
import { Users2, Trophy, Target, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">เกี่ยวกับเรา</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ระบบชมรมนักศึกษา
          เป็นศูนย์กลางในการพัฒนาศักยภาพนักศึกษาผ่านกิจกรรมที่หลากหลาย
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">วิสัยทัศน์</h2>
          <p className="text-muted-foreground">
            มุ่งมั่นที่จะเป็นศูนย์กลางในการพัฒนาศักยภาพนักศึกษา
            ผ่านกิจกรรมชมรมที่หลากหลาย
            เพื่อสร้างบัณฑิตที่มีคุณภาพและพร้อมรับใช้สังคม
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">พันธกิจ</h2>
          <p className="text-muted-foreground">
            สนับสนุนและส่งเสริมการทำกิจกรรมของนักศึกษา พัฒนาทักษะความเป็นผู้นำ
            และสร้างเครือข่ายความร่วมมือระหว่างนักศึกษาและองค์กรภายนอก
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Users2 className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">5,000+</h3>
                <p className="text-sm text-muted-foreground">
                  นักศึกษาที่เข้าร่วม
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <BookOpen className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground">
                  ชมรมที่เปิดให้เข้าร่วม
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Trophy className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-sm text-muted-foreground">รางวัลที่ได้รับ</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Target className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-sm text-muted-foreground">กิจกรรมต่อปี</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* History Timeline */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center">ประวัติความเป็นมา</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="text-primary font-bold">2540</div>
              <h3 className="font-bold">ก่อตั้งระบบชมรม</h3>
              <p className="text-sm text-muted-foreground">
                เริ่มต้นการรวมกลุ่มชมรมนักศึกษาอย่างเป็นระบบ
                เพื่อส่งเสริมกิจกรรมนอกหลักสูตร
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="text-primary font-bold">2550</div>
              <h3 className="font-bold">พัฒนาสู่ดิจิทัล</h3>
              <p className="text-sm text-muted-foreground">
                ปรับเปลี่ยนระบบการจัดการชมรมสู่รูปแบบดิจิทัล
                เพื่อเพิ่มประสิทธิภาพการทำงาน
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="text-primary font-bold">2567</div>
              <h3 className="font-bold">ปัจจุบัน</h3>
              <p className="text-sm text-muted-foreground">
                พัฒนาระบบอย่างต่อเนื่อง
                เพื่อตอบสนองความต้องการของนักศึกษายุคใหม่
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-center">ทีมผู้บริหาร</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={`svg/placeholder.svg?text=ผู้บริหาร${i}`}
                    alt={`ผู้บริหาร ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">ดร. สมชาย ใจดี</h3>
                  <p className="text-sm text-muted-foreground">
                    ผู้อำนวยการฝ่ายกิจการนักศึกษา
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
