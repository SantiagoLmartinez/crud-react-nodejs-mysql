import axios from "axios";
import {useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert'


const URI = 'http://localhost:7000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate('')
    const {id} = useParams()

//Procedimiento para editar
const update = async(e) =>{
    e.preventDefault()
    await axios.put(URI+id,{
        title: title,
        content: content
    })
    alertEdited()
    navigate('/')
}
useEffect(()=>{     
    getBlogById()
},[])
    const getBlogById = async ()=>{
        //obtenemos el blog a editar
        const res = await axios.get(URI+id)    
        //le asignamos un nuevo valor a title
        setTitle(res.data.title)
        setContent(res.data.content)
        //le asignamos un nuevo valor a content
    } 

//alerta para confirmar edicion
const alertEdited =() =>{
    swal({
        title:'Blog editado',
        icon:'success',
        timer:'2000'
    })
}

    return (
        //siempre retorna un div con el codigo html dentro
        <div className="container">
            <h2>Edit blog</h2>
            <form onSubmit={update}>
                {/*Darle estilos al FORM*/}
                <div className="mb-1">
                    <label className="form-label">Title: </label>
                    <input type="text" value={title} placeholder="Title :" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-1">
                    <label className="form-label">Content: </label>
                    <textarea    type="text" value={content} placeholder="Content :" className="form-control" onChange={(e) => setContent(e.target.value)}  />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary w-25">Update</button>
                </div>
            </form>
        </div>
    )
}
    




export default CompEditBlog