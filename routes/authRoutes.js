const express = require("express");
const {
  createUser,
  loginUserctrl,
  getallUser,
  getaUser,
  deleteaUser,
  updateUser,
  blockUser,
  unblockUser,
} = require("../controller/userCtrl");
const { authMiddlewares, isAdmin } = require("../middlewares/authMiddlewares");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserctrl);
router.get("/all-users", getallUser);
router.get("/:id", authMiddlewares, isAdmin, getaUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddlewares, updateUser);
router.put("/block-user/:id", authMiddlewares, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddlewares, isAdmin, unblockUser);

module.exports = router;
