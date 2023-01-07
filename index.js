import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';


const app = express()
dotenv.config()

const connect = async () => {
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB");
    }catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})


//middlewares
app.use(cookieParser())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/hotels', hotelsRoute)
app.use('/rooms', roomsRoute)

app.listen(8080, ()=>{
    connect()
    console.log("Connected to backend");
})