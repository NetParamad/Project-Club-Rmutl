package entity

import (
	"time"
	"gorm.io/gorm"
)

type Club struct {
	ID          uint   `gorm:"primaryKey"`
	Name        string `gorm:"type:varchar(50);not null"`
	Description string `gorm:"type:text;null"`
	Category    string `gorm:"type:varchar(50);not null"`
	MemberCount int    `gorm:"type:int;default:0"`
	MemberMax   int    `gorm:"type:int;not null;default:10"`
	LeaderID    uint   `gorm:"not null"`
	Leader      User   `gorm:"foreignKey:LeaderID;references:ID"`
	Status      string `gorm:"type:varchar(20);default:'active'"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
}