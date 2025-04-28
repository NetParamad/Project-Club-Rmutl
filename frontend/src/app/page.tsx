import Link from "next/link";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-6 pb-12 pt-16 md:pb-20 md:pt-24 lg:py-32">
        <div className="container flex flex-col items-center gap-4 text-center px-4">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            พัฒนาตัวคุณ
            <span className="text-primary block">ผ่านกิจกรรมชมรม</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            เข้าร่วมชมรมที่คุณสนใจ พัฒนาทักษะใหม่ๆ
            และสร้างมิตรภาพกับเพื่อนนักศึกษา
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="gap-2">
                เริ่มต้นใช้งาน <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                เรียนรู้เพิ่มเติม
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">สังคมที่หลากหลาย</h3>
                <p className="text-muted-foreground">
                  พบปะเพื่อนใหม่ที่มีความสนใจเดียวกัน
                  และแลกเปลี่ยนประสบการณ์ร่วมกัน
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">พัฒนาทักษะ</h3>
                <p className="text-muted-foreground">
                  เรียนรู้และพัฒนาทักษะใหม่ๆ ผ่านกิจกรรมที่หลากหลายของชมรม
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">ประสบการณ์ที่มีค่า</h3>
                <p className="text-muted-foreground">
                  สร้างประสบการณ์และความทรงจำดีๆ ในรั้วมหาวิทยาลัย
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
