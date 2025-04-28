package models

import (
	"time"
	"gorm.io/gorm"
)

// Club คือโครงสร้างข้อมูลของคลับ
type Club struct {
	ID              uint           `gorm:"primaryKey" json:"id"`               
	Name            string         `gorm:"type:varchar(255);not null;unique" json:"name"` 
	Description     string         `gorm:"type:text" json:"description"`         
	MaxMembers      uint           `gorm:"not null" json:"max_members"`           
	CurrentMembers  uint           `gorm:"default:0" json:"current_members"`     
	OwnerID         uint           `json:"owner_id"`                              
	CreatedAt       time.Time           `json:"created_at"`                         
	UpdatedAt       time.Time           `json:"updated_at"`                            
	DeletedAt       gorm.DeletedAt `gorm:"index" json:"-"`                        
}