package request

type UserCreateRequest struct {
	Username  string         `gorm:"type:varchar(50);not null" json:"username"`
	Email     string         `gorm:"type:varchar(50);unique;not null" json:"email"`
	Password  string         `gorm:"type:varchar(50);not null" json:"password"`     
	Phone     string         `gorm:"type:varchar(10);not null" json:"phone"`   
	Address   string         `gorm:"type:text;null" json:"address"`
}

type UserUpdateRequest struct {
	Username  string         `gorm:"type:varchar(50);not null" json:"username"`
	Email     string         `gorm:"type:varchar(50);unique;not null" json:"email"`
	Password  string         `gorm:"type:varchar(50);not null" json:"password"`
	Phone     string         `gorm:"type:varchar(10);not null" json:"phone"`
	Address   string         `gorm:"type:text;null" json:"address"`
}

type UserStatusRequest struct {
	Status string `json:"status"`
}