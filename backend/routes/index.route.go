package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netparamad/project-club-rmutl/handlers"
)

func RouteInit( r *fiber.App) {
	r.Get("/user", handlers.UserHandlerGetAll)
}