package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/netparamad/project-club-rmutl/database"
	"github.com/netparamad/project-club-rmutl/models/entity"
	"github.com/netparamad/project-club-rmutl/models/request"
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

func UserHandlerCreate(ctx *fiber.Ctx) error {
	user := new(request.UserCreateRequest)
	if err := ctx.BodyParser(user); err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "Failed to parse request",
		})
	}
	newUser := entity.User{
		Username: user.Username,
		Email: user.Email,
		Password: user.Password,
		Address: user.Address,
		Phone: user.Phone,
	}
	errCreateUser := database.DB.Create(&newUser).Error
	if errCreateUser != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": "Failed to create user",
		})
	}

	return ctx.JSON(fiber.Map{
		"message": "User created successfully",
		"data":    newUser,
	})
}

func UserHandlerGetById(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var user entity.User
	result := database.DB.First(&user, id)
	if result.Error != nil {
		return ctx.Status(404).JSON(fiber.Map{
			"error": "User not found",
		})
	}
	return ctx.JSON(user)
}

func UserHandlerUpdate(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var user entity.User
	result := database.DB.First(&user, id)
	if result.Error != nil {
		return ctx.Status(404).JSON(fiber.Map{
			"error": "User not found",
		})
	}

	userUpdate := new(request.UserUpdateRequest)
	if err := ctx.BodyParser(userUpdate); err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "Failed to parse request",
		})
	}

	user.Username = userUpdate.Username
	user.Email = userUpdate.Email
	user.Password = userUpdate.Password
	user.Address = userUpdate.Address
	user.Phone = userUpdate.Phone

	errUpdateUser := database.DB.Save(&user).Error
	if errUpdateUser != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": "Failed to update user",
		})
	}

	return ctx.JSON(fiber.Map{
		"message": "User updated successfully",
		"data":    user,
	})
}

func UserHandlerDelete(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var user entity.User
	result := database.DB.First(&user, id)
	if result.Error != nil {
		return ctx.Status(404).JSON(fiber.Map{
			"error": "User not found",
		})
	}

	errDeleteUser := database.DB.Delete(&user).Error
	if errDeleteUser != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": "Failed to delete user",
		})
	}

	return ctx.JSON(fiber.Map{
		"message": "User deleted successfully",
	})
}

func UserHandlerUpdateStatus(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var user entity.User
	result := database.DB.First(&user, id)
	if result.Error != nil {
		return ctx.Status(404).JSON(fiber.Map{
			"error": "User not found",
		})
	}
	statusRequest := new(request.UserStatusRequest)
	if err := ctx.BodyParser(statusRequest); err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"error": "Failed to parse request",
		})
	}
	user.Status = statusRequest.Status
	errUpdateStatus := database.DB.Save(&user).Error
	if errUpdateStatus != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"error": "Failed to update user status",
		})
	}
	return ctx.JSON(fiber.Map{
		"message": "User status updated successfully",
		"data":    user,
	})
}