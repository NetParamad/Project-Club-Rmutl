package entity

import (
	"time" 
	"gorm.io/gorm"
)

type User struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	Email     string         `gorm:"type:varchar(50);unique;not null" json:"email"`
	Password  string         `gorm:"type:varchar(50);not null" json:"password"`     
	Address   string         `gorm:"type:text;not null" json:"address"`
	Phone     string         `gorm:"type:varchar(10);not null" json:"phone"`   
	Role      string         `gorm:"type:varchar(50);default:'student'" json:"role"`
	CreatedAt time.Time           `json:"created_at"`
	UpdatedAt time.Time           `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}