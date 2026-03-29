import { Router } from "express";

// controllers
import {
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  login,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgotPassword,
  verifyEmail,
} from "../controllers/auth.controllers.js";

// middlewares
import { validate } from "../middlewares/validator.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

// validators
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgotPasswordValidator,
} from "../validators/index.js";

const router = Router();

/* =========================
   PUBLIC ROUTES
========================= */

// register (with avatar upload)
router.post(
  "/register",
  upload.single("avatar"),
  userRegisterValidator(),
  validate,
  registerUser
);

// login
router.post(
  "/login",
  userLoginValidator(),
  validate,
  login
);

// verify email
router.get("/verify-email/:verificationToken", verifyEmail);

// refresh token
router.post("/refresh-token", refreshAccessToken);

// forgot password
router.post(
  "/forgot-password",
  userForgotPasswordValidator(),
  validate,
  forgotPasswordRequest
);

// reset password
router.post(
  "/reset-password/:resetToken",
  userResetForgotPasswordValidator(),
  validate,
  resetForgotPassword
);

/* =========================
   PROTECTED ROUTES
========================= */

// logout
router.post("/logout", verifyJWT, logoutUser);

// current user
router.get("/current-user", verifyJWT, getCurrentUser);

// change password
router.post(
  "/change-password",
  verifyJWT,
  userChangeCurrentPasswordValidator(),
  validate,
  changeCurrentPassword
);

// resend email verification
router.post(
  "/resend-email-verification",
  verifyJWT,
  resendEmailVerification
);

export default router;