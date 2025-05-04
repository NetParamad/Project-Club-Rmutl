package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netparamad/project-club-rmutl/database"
	"github.com/netparamad/project-club-rmutl/database/migration"
	"github.com/netparamad/project-club-rmutl/routes"
)

func main() {

	app := fiber.New()
	// Database
	database.DatabaseInit()
	// Migration
	migration.RunMigration()
	// Routes
	routes.RouteInit(app)
	
	app.Listen(":5000")

}
