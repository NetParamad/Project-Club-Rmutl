package request

type ClubCreateRequest struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
	Category    string `json:"category" binding:"required"`
	MemberMax   int    `json:"member_max" binding:"required"`
	LeaderID    uint   `json:"leader_id" binding:"required"`
}
type ClubUpdateRequest struct {
	Name        string `json:"name" binding:"required"`
	Description string `json:"description"`
	Category    string `json:"category" binding:"required"`
	MemberMax   int    `json:"member_max" binding:"required"`
	LeaderID    uint   `json:"leader_id" binding:"required"`
}
type ClubStatusRequest struct {
	Status string `json:"status" binding:"required"`
}