import express from 'express';
import { createHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';


const router = express.Router()


//create 
router.post("/",createHotel)
//update
router.put("/:id", async(req, res) => {

   
})
//delete
router.delete("/:id", async(req, res) => {


})
//get
router.get("/:id", async(req, res) => {
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(error){
        res.status(500).json(error)
    }
})
//get all
router.get("/", async(req, res) => {

})

export default router;