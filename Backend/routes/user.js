const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { PrismaClient } = require('@prisma/client');
const { JWT_SECERT } = require("../config");
const prisma = new PrismaClient();
const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req,res)=>{
    try{
        const {username, firstName,lastName, password} = signupBody.parse(req.body)
        const existingUser = await prisma.user.findUnique({
            where:{
                email: username
            }
        });

        if(existingUser){
            return res.status(400).json({error: "Username already exists"})
        }

        const newUser = await prisma.user.create({
            data:{
                email: username,
                firstName,
                lastName,
                password
            }
        });

        const userId = newUser._id;

        const token = jwt.sign({
            userId,
        }, JWT_SECERT)

        res.status(201).json({ 
            success: true,
            user: newUser,
            token:token,
            msg:"user created succesfully"
        })

    }catch(error){
        console.error("Error signing up:", error)
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
})

const singinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post("/signin", async (req,res)=>{
    try{
        const {username, password} = singinBody.parse(req.body);

        const existingUser = await prisma.user.findUnique({
            where:{
                email: username
            }
        });

        if(!existingUser){
            return res.status(404).json({error:"User not found"})
        }

        if(existingUser.password !== password){
            
            return res.status(401).json({error: "Invaild password"});
        }
        const token =  jwt.sign({
            userId: existingUser._id
        }, JWT_SECERT)

        res.status(200).json({success: true,token:token, user: existingUser});

    }catch(error){
        console.error("Error signing in", error)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
})

module.exports = router;