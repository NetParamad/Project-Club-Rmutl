import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";



const clubs = [
  {
    id: 1,
    name: "ชมรมคอมพิวเตอร์",
    description: "เรียนรู้และพัฒนาทักษะด้านคอมพิวเตอร์และเทคโนโลยี",
    members: 45,
  },
  {
    id: 2,
    name: "ชมรมดนตรี",
    description: "สร้างสรรค์ดนตรีและพัฒนาทักษะการแสดง",
    members: 30,
  },
  {
    id: 3,
    name: "ชมรมกีฬา",
    description: "ส่งเสริมการออกกำลังกายและการเล่นกีฬา",
    members: 50,
  },
];


export default function ClubsPage() {

  
  return (
    <div className="min-h-screen bg-gradient-to-b m-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">เลือกชมรมที่คุณสนใจ</h1>
          <p className="text-muted-foreground">
            เลือกเข้าร่วมชมรมที่ตรงกับความสนใจของคุณ
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <Card key={club.id}>
              <CardHeader>
                <CardTitle>{club.name}</CardTitle>
                <CardDescription>สมาชิก: {club.members} คน</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{club.description}</p>
                <Button className="w-full">สมัครเข้าร่วม</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
