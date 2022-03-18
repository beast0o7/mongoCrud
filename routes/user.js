const express = require("express");
const User = require("../models/User")
const router = express.Router();


router.get("/", async(req, res) => {
    
    let users = await User.find({})
    res.json(users)
    })


router.post("/", (req, res) => {
    const data = { name: req.body.name ,age: req.body.age};

    User.create(data, (err, data) => {
        if (!err) {
            res.json(data);
        }
        else {
            console.log(err);
        }
    })
})

router.put("/:id", (req,res) =>{
    const data = {  name: req.body.name ,age: req.body.age }

    User.findByIdAndUpdate(req.params.id, data, (err, data) => {
        if (!err) {
            res.json(data);
        }
        else {
            console.log(err); 
        }
    })
})


router.put("/:id", (req,res) =>{
    const data = {  name: req.body.name ,age: req.body.age }

    User.findByIdAndUpdate(req.params.id, data, (err, data) => {
        if (!err) {
            res.json(data);
        }
        else {
            console.log(err); 
        }
    })
})
router.delete("/:id", (req,res) =>{
    

    User.findByIdAndDelete(req.params.id, (err, data) => {
        if (!err) {
            res.json({"msg":"delete success"});
        }
        else {
            console.log(err); 
        }
    })
})
















    module.exports = router;
