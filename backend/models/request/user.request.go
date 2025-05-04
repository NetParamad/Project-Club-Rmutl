package request

type UserCreateRequest struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	Email     string         `gorm:"type:varchar(255);unique;not null" json:"email"`
	Password  string         `gorm:"not null" json:"-"`
	ClubID    uint           `gorm:"not null" json:"club_id"`         
	Role      string         `gorm:"type:varchar(50);default:'member'" json:"role"` 
}