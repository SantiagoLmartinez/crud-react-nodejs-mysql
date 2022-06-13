//1 importar
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//ENDPOINT CON BACKEND
const URI = 'http://localhost:7000/blogs/'

//2 Estructura general del componente

const CompCreateBlog = () => {
    //configuramos hook
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //procedimiento para guardar
    const storeBlog = async (e) => {
        //evitar el submit por default del Form
        e.preventDefault()
        //nos conectamos con db para procesar datos
        await axios.post(URI, { title: title, content: content })
        // una vez procesados nos redireccionamos al root
        navigate('/')
    }
    return (
        //siempre retorna un div con el codigo html dentro
        <div className="container">
            <h2>Create blog</h2>
            <form onSubmit={storeBlog}>
                {/*Darle estilos al FORM*/}
                <div className="mb-1">
                    <label className="form-label">Title: </label>
                    <input type="text" placeholder="Title :" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label className="form-label">Content: </label>
                    <textarea    type="text" placeholder="Content :" className="form-control" onChange={(e) => setContent(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-25">Send</button>
                </div>
            </form>
        </div>
    )
}

export default CompCreateBlog