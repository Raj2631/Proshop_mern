import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    if (products) {
      res.json(products)
    } else {
      res.status(400)
      throw new Error('Products not found')
    }
  })
)

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
