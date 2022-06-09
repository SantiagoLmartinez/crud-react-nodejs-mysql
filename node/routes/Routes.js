import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogControllers.js";

const router = express.Router();

//traer todos los blogs
router.get('/', getAllBlogs)

//mostrar solo 1 blog
router.get('/:id', getBlog)

//crear blog
router.post('/', createBlog)

//actualizar blog
router.put('/:id', updateBlog)

//eliminar blog
router.delete('/:id', deleteBlog)

export default router