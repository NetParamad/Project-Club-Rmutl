"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Here you would typically send the form data to your server
  };

  return (
    <div className="container py-10">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">ติดต่อเรา</h1>
            <p className="text-muted-foreground">
              มีคำถามหรือข้อสงสัย? ติดต่อเราได้ตลอดเวลา
              ทีมงานของเราพร้อมให้ความช่วยเหลือ
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">อีเมล</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@university.ac.th
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">เบอร์โทรศัพท์</h3>
                  <p className="text-sm text-muted-foreground">02-xxx-xxxx</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">ที่อยู่</h3>
                  <p className="text-sm text-muted-foreground">
                    123 ถนนมหาวิทยาลัย เขตเมือง จังหวัดกรุงเทพ 10xxx
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">เวลาทำการ</h3>
                  <p className="text-sm text-muted-foreground">
                    จันทร์ - ศุกร์: 08:30 - 16:30 น.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                  <Input
                    id="name"
                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">อีเมล</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">เรื่องที่ติดต่อ</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกเรื่องที่ต้องการติดต่อ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">สอบถามทั่วไป</SelectItem>
                      <SelectItem value="club">เกี่ยวกับชมรม</SelectItem>
                      <SelectItem value="technical">
                        ปัญหาการใช้งานระบบ
                      </SelectItem>
                      <SelectItem value="other">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">ข้อความ</Label>
                  <Textarea
                    id="message"
                    placeholder="กรุณากรอกรายละเอียด"
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
