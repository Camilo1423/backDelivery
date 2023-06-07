// import for librery
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { dbConect } from './helpers/conectDB.js';
import morgan from 'morgan';



// import routes from mvt
import oderRoute from './routes/oder.route.js'
import productRoute from './routes/product.route.js'

// instancias
const app = express();


// midelwere morgan
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// db conection
await dbConect()


// endpoints creados pasar usar en el front
// products
app.use('/api/v1/products', productRoute)
// orders
app.use('/api/v1/orders', oderRoute)



//www.ejemplo.com/user/login


export { app }
