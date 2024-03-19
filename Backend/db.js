import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser() {

    try {
        const newUser = {
            username: "deavng@gmail.com",
            password: "devangkus",
            firstName: "devang",
            lastName: "doe"
        };

        const res = await prisma.user.create({
            data: newUser
        })
        console.log("User inserted successfully", res);
    } catch(error){
        console.error("Error inserting user:", error)
    }finally{
        await prisma.$disconnect();
    }
}

insertUser()