import userModel from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController{
    static UserRegistration=async (req,res)=>{
        const {name,email,password, password_confirmation,tc}=req.body
        const user=await userModel.findOne({email:email})
        if (user){
            res.send({"status":"failed",'message':"Email already exists"})
        }else{
            if(name && email && password && password_confirmation && tc){
                if(password===password_confirmation){
                    const doc=new userModel({
                        name:name,
                        email:email,
                        password:password,
                        tc:tc
                    })
                    await doc.save()
                   
                }else{
                    res.send({'status':'failed','message':'password and confirm password does not match '})
                }

            }else{
                res.send({'status':'failed','message':'All fields are required '})
            }
        }
    }
}