const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  changePassword,
  updateAvatar,
  deleteAvatar,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', registerUser);

/**
 * @route   POST /api/v1/auth/login
 * @desc    Authenticate a user
 * @access  Public
 */
router.post('/login', loginUser);

/**
 * @route   GET /api/v1/auth/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/me', protect, getMe);

/**
 * @route   PUT /api/v1/auth/profile
 * @desc    Update user profile
 * @access  Private
 */
router.put('/profile', protect, updateProfile);

/**
 * @route   PUT /api/v1/auth/change-password
 * @desc    Change user password
 * @access  Private
 */
router.put('/change-password', protect, changePassword);

/**
 * @route   PUT /api/v1/auth/profile/avatar
 * @desc    Upload avatar
 * @access  Private
 */
router.put('/profile/avatar', protect, updateAvatar);

/**
 * @route   DELETE /api/v1/auth/profile/avatar
 * @desc    Delete avatar
 * @access  Private
 */
router.delete('/profile/avatar', protect, deleteAvatar);

module.exports = router;
