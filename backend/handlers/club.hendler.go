package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netparamad/project-club-rmutl/database"
	"github.com/netparamad/project-club-rmutl/models/entity"
	"github.com/netparamad/project-club-rmutl/models/request"
)


func ClubHandlerGetAll(c *fiber.Ctx) error {
	var clubs []entity.Club
	result := database.DB.Find(&clubs)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to fetch clubs",
		})
	}
	return c.Status(200).JSON(clubs)
}

func ClubHandlerCreate(c *fiber.Ctx) error {
	club := new(entity.Club)
	if err := c.BodyParser(club); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Failed to parse request",
		})
	}
	errCreateClub := database.DB.Create(&club).Error
	if errCreateClub != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to create club",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Club created successfully",
		"data":    club,
	})
}
func ClubHandlerGetById(c *fiber.Ctx) error {
	id := c.Params("id")
	var club entity.Club
	result := database.DB.First(&club, id)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Club not found",
		})
	}
	return c.JSON(club)
}
func ClubHandlerUpdate(c *fiber.Ctx) error {
	id := c.Params("id")
	var club entity.Club
	result := database.DB.First(&club, id)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Club not found",
		})
	}

	if err := c.BodyParser(&club); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Failed to parse request",
		})
	}

	database.DB.Save(&club)
	return c.JSON(club)
}
func ClubHandlerDelete(c *fiber.Ctx) error {
	id := c.Params("id")
	var club entity.Club
	result := database.DB.First(&club, id)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Club not found",
		})
	}

	database.DB.Delete(&club)
	return c.JSON(fiber.Map{
		"message": "Club deleted successfully",
	})
}
func ClubHandlerUpdateStatus(c *fiber.Ctx) error {
	id := c.Params("id")
	var club entity.Club
	result := database.DB.First(&club, id)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Club not found",
		})
	}

	statusRequest := new(request.ClubStatusRequest)
	if err := c.BodyParser(statusRequest); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Failed to parse request",
		})
	}
	club.Status = statusRequest.Status
	errUpdateStatus := database.DB.Save(&club).Error
	if errUpdateStatus != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to update club status",
		})
	}
	return c.JSON(fiber.Map{
		"message": "Club status updated successfully",
		"data":    club,
	})
}