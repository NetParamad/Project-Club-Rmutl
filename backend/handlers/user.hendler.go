package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netparamad/project-club-rmutl/database"
	"github.com/netparamad/project-club-rmutl/models/entity"
)

func UserHandlerGetAll(ctx *fiber.Ctx) error {
	var users []entity.User
	result := database.DB.Find(&users)
	if result.Error != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": "Failed to fetch users",
		})
	}
	return ctx.Status(200).JSON(users)
}

func UserHandlerGetByID(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var user entity.User
	result := database.DB.First(&user, id)
	if result.Error != nil {
		return ctx.Status(404).JSON(fiber.Map{
			"error": "User not found",
		})
	}
	return ctx.Status(200).JSON(user)
}

func UserHandlerCreate(ctx *fiber.Ctx) error {
	var user entity.User
	if err := ctx.BodyParser(&user); err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "Invalid input",
		})
	}
	result := database.DB.Create(&user)
	if result.Error != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": "Failed to create user",
		})
	}
	return ctx.Status(201).JSON(user)
}