const express=require('express')
const router=express.Router()

const homeController=require('../controllers/home_controller')

router.get('/',(req,res)=>{
    return res.send('home controller')
})

module.exports=router