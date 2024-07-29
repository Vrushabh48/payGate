const express = require('express');
const zod = require("zod")
const {User} = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
const authMiddleware = require("../middlewares");

const signupdata = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
});

router.post("/signup" , async (req,res) =>{

    const {success} = signupdata.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Invalid Inputs! Please try again.."
        })
    }

    const existinguser =await User.findOne({
        username: req.body.username
    })

    if(existinguser){
        return res.status(411).json({
            message: "User Already exists"
        })
    }

    const user =await User.Create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message : "User Registered Successfully",
        token: token
    })
})

const signindata = zod.object({
    username: zod.string(),
    password: zod.string()
});

router.post("/signin", async (req,res) => {

    const {success} = signindata.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message : "Invalid inputs! Please try again.."
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

const updatedata = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

routes.put("/",authMiddleware, async (req,res) => {
    const {success} = updatedata.safeParse(req.body);

    if(!success){
        return res.status(401).json({
            message: "Invalid inputs.."
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "Updated successfully"
    })
})
