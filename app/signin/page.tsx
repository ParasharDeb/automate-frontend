'use client'
import { useState } from "react";
import CustomInputbox from "../components/inputbox";
import Custombutton from "../components/button";

export default function Signin(){
    const [email,setemail]=useState("")
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    return(
        <div className="bg-grey-600 flex h-screen w-screen justify-center items-center">
            <div className="bg-grey-400 w-80 h-100 text-white rounded-3xl px-4">
                <CustomInputbox placeholder="m@example.com" type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} name="Email"/>
                <CustomInputbox placeholder="John Doe" type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} name="Username"/>
                <CustomInputbox placeholder="abc111" type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} name="Password"/>
                <Custombutton varient="lightmode" size="lg" onClick={()=>console.log(email,username,password)}content="Signup"/>
            </div>
        </div>
    )
}