import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

//end point con el backend
const URI = 'http://localhost:7000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])


    //prodedimiento para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    //alerta para confirmar delete
    const alertDelete = (blog) => {
        swal({
            title: "Estas seguro?",
            text: "eliminar este blog?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Blog eliminado", {
                        icon: "success", timer:'2000'
                    });
                    deleteBlog(blog.id)
                } else {
                    //swal("Your imaginary file is safe!");
                }
            });
    }

    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create' className='btn btn-primary my-2'>Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info mx-1'>Edit</Link>
                                        <button onClick={() => alertDelete(blog)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
//exportamos el componente por default (Averiguar)
export default CompShowBlogs
