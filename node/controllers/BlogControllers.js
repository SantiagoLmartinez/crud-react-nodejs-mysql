//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//** Métodos para el CRUD **//

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}
//Mostrar un registro READ
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//Crear un registo CREATE
export const createBlog = async (req, res) => {

    try {
        //INSERT INTO blogs(id, title, content) VALUES (4,'titulo 4','hola'); 
        await BlogModel.create(req.body)
        res.json({"message": "¡Registro creado"})
    } catch (error) {
        res.json({message: error.message})
    }
}//Actualizar un registro UPDATE
export const updateBlog = async (req, res) => {
    try {
        const blog = await BlogModel.update(req.body,{
            where: {id: req.params.id}
            })
            res.json({"message": "¡Registro actualizado"})
    } catch (error) {
        res.json({message: error.message})
    }
}
//eliminar un registro DELETE
export const deleteBlog = async (req, res) => {
    try {
        const blog = await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"Registro Eliminado"})
    } catch (error) {
        res.json({message: error.message})
    }
}