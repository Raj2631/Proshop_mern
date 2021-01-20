import express from 'express'
import { authUser, getUserProfile } from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public

router.post('/login', authUser)

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public

router.route('/profile').get(protect, getUserProfile)

export default router
