package database

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DatabaseInit() {
	dsn := os.Getenv("DATABASE_URL") + "?TimeZone=Asia/Bangkok"
	if dsn == "" {
		log.Fatal("DATABASE_URL is not set")
	}

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to connect database: %v", err)
	}
	fmt.Println("Database connected successfully")
}