package migration

import (
	"github.com/netparamad/project-club-rmutl/database"
	"github.com/netparamad/project-club-rmutl/models/entity"
)

func RunMigration() {
	err := database.DB.AutoMigrate(&entity.User{})
	if err != nil {
		panic("Failed to migrate User model: " + err.Error())
	}
}