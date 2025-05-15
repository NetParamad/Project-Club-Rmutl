package entity

import (
	"time" 
	"gorm.io/gorm"
)

type User struct {
    ID        uint           `gorm:"primaryKey"`
    Username  string         `gorm:"size:50;not null"`
    Email     string         `gorm:"size:50;unique;not null"`
    Password  string         `gorm:"size:50;not null"`
    Phone     string         `gorm:"size:10;not null"`
    Address   string
    Role      string         `gorm:"type:varchar(20);default:'student'"`
    Status    string         `gorm:"type:varchar(20);default:'active'"`  
    CreatedAt time.Time
    UpdatedAt time.Time
    DeletedAt gorm.DeletedAt `gorm:"index"`
}
