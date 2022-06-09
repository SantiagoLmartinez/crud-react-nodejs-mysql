import express  from "express";
import cors from 'cors';

//importamos la conexion a la db
import db from './database/db.js'

//importamos el enrutador
import blogRoutes from './routes/Routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)
try {
    await db.authenticate()
    console.log('se conecto con db')
} catch (error) {
    console.log('error al conectar con db'+ error)
}

app.get('/',(req,res)=>{
    //res.send('hello world, podes empezar a trabajar')
    res.send('hello world')
})

app.listen(8000, ()=>{
    console.log('server on  http://localhost:8000/')
})