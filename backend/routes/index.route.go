package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netparamad/project-club-rmutl/handlers"
)

func RouteInit( r *fiber.App) {
	r.Get("/user", handlers.UserHandlerGetAll)
	r.Post("/user", handlers.UserHandlerCreate)
	r.Get("/user/:id", handlers.UserHandlerGetById)
	r.Put("/user/:id", handlers.UserHandlerUpdate)
	r.Delete("/user/:id", handlers.UserHandlerDelete)
	r.Patch("/user/:id", handlers.UserHandlerUpdateStatus)
}
