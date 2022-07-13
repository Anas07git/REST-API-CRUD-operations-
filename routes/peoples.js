const express=require('express')
const router=express.Router()
const People=require('../models/people')

router.get('/',async(req,res) =>{
    try {
        const peoples= await People.find()
        res.json(peoples)
        
    } catch (err) {
        res.send('Error: ' +err)
        
    }

    
})
router.get('/:id',async(req,res) =>{
    try {
        const people= await People.findById(req.params.id)
        res.json(people)
        
    } catch (err) {
        res.send('Error: ' +err)
        
    }

    
})
router.post('/',async(req,res)=>{
    const people=  new People({
        name: req.body.name,
        dept: req.body.dept,
        shortlisted: req.body.shortlisted,

    })
    try {
        const ab=await people.save()
        res.json(ab)
        
    } catch (err) {
        res.send('Error: '+ err)
        
    }

})

router.patch('/:id',async(req,res)=>{
    try {
        const people=await People.findById(req.params.id)
        people.shortlisted=req.body.shortlisted
        const ab=await people.save()
        res.json(ab)
    } catch (err) {
        res.send('Error: '+err)
        
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const people=await People.findById(req.params.id)
        const ab=await people.delete()
        res.json(ab)
    } catch (err) {
        res.send('Error: '+err)
        
    }
})
module.exports=router
